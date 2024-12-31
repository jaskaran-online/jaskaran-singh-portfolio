-- Enable UUID extension for generating UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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

-- Insert a default admin author
INSERT INTO authors (email, full_name, role)
VALUES ('admin@jaskaran.in', 'Jaskaran Singh', 'admin')
ON CONFLICT (email) DO UPDATE SET role = 'admin';

-- Store the default author's ID in a variable
DO $$ 
DECLARE
    default_author_id UUID;
BEGIN
    SELECT id INTO default_author_id FROM authors WHERE email = 'admin@jaskaran.in';

    -- Create blog_posts table with default author
    CREATE TABLE blog_posts (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        author_id UUID NOT NULL REFERENCES authors(id) DEFAULT default_author_id,
        categories TEXT[] DEFAULT '{}',
        tags TEXT[] DEFAULT '{}',
        published_date TIMESTAMPTZ,
        status VARCHAR(20) CHECK (status IN ('draft', 'published')) DEFAULT 'draft',
        meta_description TEXT,
        featured_image TEXT,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );
END $$;

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
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published_date ON blog_posts(published_date);
CREATE INDEX idx_comments_post ON comments(post_id);
CREATE INDEX idx_comments_author ON comments(author_id);
CREATE INDEX idx_comments_parent ON comments(parent_id);

-- Create trigger function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables
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

-- Create RLS (Row Level Security) policies
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

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
