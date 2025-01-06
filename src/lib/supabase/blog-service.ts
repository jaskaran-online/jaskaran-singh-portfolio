import { supabase } from './config';
import type { BlogPost } from './types';

const POSTS_PER_PAGE = 10;

export const blogService = {
  async getPosts({
    page = 1,
    search = '',
    sortBy = 'published_date',
    sortOrder = 'desc',
    category,
    tag,
    showAll = false,
  }: {
    page?: number;
    search?: string;
    sortBy?: keyof BlogPost;
    sortOrder?: 'asc' | 'desc';
    category?: string;
    tag?: string;
    showAll?: boolean;
  }) {
    let query = supabase
      .from('blog_posts')
      .select('*', { count: 'exact' })
      .order(sortBy, { ascending: sortOrder === 'asc' })
      .range((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE - 1);

    if (!showAll) {
      query = query.eq('status', 'published');
    }

    if (search) {
      query = query.ilike('title', `%${search}%`);
    }

    if (category) {
      query = query.contains('categories', [category]);
    }

    if (tag) {
      query = query.contains('tags', [tag]);
    }

    const { data: posts, error, count } = await query;

    if (error) throw error;

    return {
      posts,
      totalPages: Math.ceil((count || 0) / POSTS_PER_PAGE),
      currentPage: page,
    };
  },

  async getPostBySlug(slug: string) {
    const { data: post, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return post;
  },

  async createPost(post: BlogPost['Insert']) {
    const { data, error } = await supabase.from('blog_posts').insert(post).select().single();

    if (error) throw error;
    return data;
  },

  async updatePost(id: string, post: Partial<BlogPost>) {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(post)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deletePost(id: string) {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id);
    if (error) throw error;
  },

  async bulkUpdateStatus(ids: string[], status: BlogPost['status']) {
    const { error } = await supabase.from('blog_posts').update({ status }).in('id', ids);

    if (error) throw error;
  },

  async bulkDelete(ids: string[]) {
    const { error } = await supabase.from('blog_posts').delete().in('id', ids);
    if (error) throw error;
  },
};
