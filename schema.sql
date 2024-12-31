-- Enable UUID extension for generating UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables and their dependencies
DO $$ 
BEGIN
    -- Drop tables if they exist (in reverse order of dependencies)
    DROP TABLE IF EXISTS comments CASCADE;
    DROP TABLE IF EXISTS blog_posts CASCADE;
    DROP TABLE IF EXISTS authors CASCADE;
END $$;

-- Create authors table first
CREATE TABLE authors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('admin', 'user')),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin author
DO $$
DECLARE
    admin_id UUID;
BEGIN
    INSERT INTO authors (email, full_name, role)
    VALUES ('admin@jaskaran.in', 'Jaskaran Singh', 'admin')
    RETURNING id INTO admin_id;
END $$;

-- Create blog_posts table
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    author_id UUID NOT NULL REFERENCES authors(id),
    categories TEXT[] DEFAULT '{}',
    tags TEXT[] DEFAULT '{}',
    published_date TIMESTAMPTZ,
    status VARCHAR(20) CHECK (status IN ('draft', 'published')) DEFAULT 'draft',
    meta_description TEXT,
    featured_image TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Create comments table
CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
    author_id UUID NOT NULL REFERENCES authors(id),
    parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_date ON blog_posts(published_date);
CREATE INDEX IF NOT EXISTS idx_comments_post ON comments(post_id);
CREATE INDEX IF NOT EXISTS idx_comments_author ON comments(author_id);
CREATE INDEX IF NOT EXISTS idx_comments_parent ON comments(parent_id);

-- Create trigger function to update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables
DO $$
BEGIN
    -- Drop existing triggers if they exist
    DROP TRIGGER IF EXISTS update_authors_updated_at ON authors;
    DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
    DROP TRIGGER IF EXISTS update_comments_updated_at ON comments;

    -- Create new triggers
    CREATE TRIGGER update_authors_updated_at
        BEFORE UPDATE ON authors
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();

    CREATE TRIGGER update_blog_posts_updated_at
        BEFORE UPDATE ON blog_posts
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();

    CREATE TRIGGER update_comments_updated_at
        BEFORE UPDATE ON comments
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
END $$;

-- Create RLS (Row Level Security) policies
DO $$
BEGIN
    -- Enable RLS
    ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
    ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
    ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

    -- Drop existing policies
    DROP POLICY IF EXISTS "Public authors are viewable by everyone" ON authors;
    DROP POLICY IF EXISTS "Authors can update their own profile" ON authors;
    DROP POLICY IF EXISTS "Admins can view all posts, others can view published or own posts" ON blog_posts;
    DROP POLICY IF EXISTS "Authors can create posts" ON blog_posts;
    DROP POLICY IF EXISTS "Authors can update their own posts" ON blog_posts;
    DROP POLICY IF EXISTS "Authors can delete their own posts" ON blog_posts;
    DROP POLICY IF EXISTS "Comments are viewable by everyone" ON comments;
    DROP POLICY IF EXISTS "Authenticated users can create comments" ON comments;
    DROP POLICY IF EXISTS "Users can update their own comments" ON comments;
    DROP POLICY IF EXISTS "Users can delete their own comments" ON comments;

    -- Create new policies
    -- Authors policies
    CREATE POLICY "Public authors are viewable by everyone"
        ON authors FOR SELECT
        USING (true);

    CREATE POLICY "Authors can update their own profile"
        ON authors FOR UPDATE
        USING (auth.uid()::text = id::text);

    -- Blog posts policies
    CREATE POLICY "Admins can view all posts, others can view published or own posts"
        ON blog_posts FOR SELECT
        USING (
            EXISTS (
                SELECT 1 FROM authors 
                WHERE id::text = auth.uid()::text 
                AND role = 'admin'
            )
            OR status = 'published' 
            OR auth.uid()::text = author_id::text
        );

    CREATE POLICY "Authors can create posts"
        ON blog_posts FOR INSERT
        WITH CHECK (auth.uid()::text = author_id::text);

    CREATE POLICY "Authors can update their own posts"
        ON blog_posts FOR UPDATE
        USING (auth.uid()::text = author_id::text);

    CREATE POLICY "Authors can delete their own posts"
        ON blog_posts FOR DELETE
        USING (auth.uid()::text = author_id::text);

    -- Comments policies
    CREATE POLICY "Comments are viewable by everyone"
        ON comments FOR SELECT
        USING (true);

    CREATE POLICY "Authenticated users can create comments"
        ON comments FOR INSERT
        WITH CHECK (auth.uid()::text = author_id::text);

    CREATE POLICY "Users can update their own comments"
        ON comments FOR UPDATE
        USING (auth.uid()::text = author_id::text);

    CREATE POLICY "Users can delete their own comments"
        ON comments FOR DELETE
        USING (auth.uid()::text = author_id::text);
END $$;

-- Insert dummy data
DO $$
DECLARE
    admin_id UUID;
    user_id UUID;
    post1_id UUID;
    post2_id UUID;
BEGIN
    -- Get admin ID
    SELECT id INTO admin_id FROM authors WHERE email = 'admin@jaskaran.in';

    -- Create a regular user
    INSERT INTO authors (email, full_name, role)
    VALUES ('user@example.com', 'John Doe', 'user')
    RETURNING id INTO user_id;

    -- Create some blog posts
    INSERT INTO blog_posts (title, content, slug, author_id, categories, tags, status, meta_description, published_date)
    VALUES 
    (
        'Getting Started with Next.js 14',
        E'Next.js 14 introduces several groundbreaking features that revolutionize the way we build web applications. Let''s explore the key highlights:\n\n## Server Actions\nServer Actions allow you to write server-side logic directly in your components...\n\n## Partial Prerendering\nPartial Prerendering is a new rendering model that combines static and dynamic content...\n\n## Improved Developer Experience\nThe development experience has been enhanced with faster refresh times and better error handling...',
        'getting-started-with-nextjs-14',
        admin_id,
        ARRAY['Development', 'Web'],
        ARRAY['nextjs', 'react', 'javascript'],
        'published',
        'A comprehensive guide to getting started with Next.js 14 and its new features',
        CURRENT_TIMESTAMP
    ) RETURNING id INTO post1_id;

    INSERT INTO blog_posts (title, content, slug, author_id, categories, tags, status, meta_description)
    VALUES 
    (
        'Understanding TypeScript Generics',
        E'TypeScript generics provide a way to make components work with any data type, not just a single one. Here''s how to use them effectively:\n\n## Basic Syntax\nThe basic syntax for generics uses angle brackets...\n\n## Constraints\nYou can constrain the types that can be used with your generic...\n\n## Best Practices\nHere are some best practices to follow when working with generics...',
        'understanding-typescript-generics',
        admin_id,
        ARRAY['Development', 'TypeScript'],
        ARRAY['typescript', 'javascript', 'programming'],
        'draft',
        'Learn how to effectively use TypeScript generics in your projects'
    ) RETURNING id INTO post2_id;

    -- Create some comments
    INSERT INTO comments (post_id, author_id, content)
    VALUES
    (post1_id, user_id, 'Great article! The explanation of Server Actions was particularly helpful.'),
    (post1_id, admin_id, 'Thanks! Glad you found it useful.'),
    (post2_id, user_id, 'Looking forward to the published version of this article!');

END $$;
