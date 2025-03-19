import { MetadataRoute } from 'next';
import { blogService } from '@/lib/supabase/blog-service';

const BASE_URL = 'https://jaskaran.in'; // TODO: Replace with your domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define default routes that don't depend on external data
  const routes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  try {
    // Try to fetch blog posts, but don't fail if it doesn't work
    const { posts } = await blogService.getPosts({ page: 1 });

    const blogPosts = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    return [...routes, ...blogPosts];
  } catch (error) {
    // If fetching blog posts fails, just return the static routes
    console.error('Failed to fetch blog posts for sitemap:', error);
    return routes;
  }
}
