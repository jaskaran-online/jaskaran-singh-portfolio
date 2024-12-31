export type BlogPost = {
  id: string
  title: string
  content: string
  slug: string
  author_id: string
  categories: string[]
  tags: string[]
  published_date: string
  status: 'draft' | 'published'
  meta_description: string
  featured_image: string
  created_at: string
  updated_at: string
}

export type Author = {
  id: string
  email: string
  full_name: string
  avatar_url: string
}

export type Comment = {
  id: string
  post_id: string
  author_id: string
  parent_id: string | null
  content: string
  created_at: string
  updated_at: string
  author?: Author
  replies?: Comment[]
}

export type Database = {
  public: {
    Tables: {
      blog_posts: {
        Row: BlogPost
        Insert: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<BlogPost, 'id'>>
      }
      authors: {
        Row: Author
        Insert: Omit<Author, 'id'>
        Update: Partial<Omit<Author, 'id'>>
      }
      comments: {
        Row: Comment
        Insert: Omit<Comment, 'id' | 'created_at' | 'updated_at' | 'author' | 'replies'>
        Update: Partial<Omit<Comment, 'id' | 'author' | 'replies'>>
      }
    }
  }
}
