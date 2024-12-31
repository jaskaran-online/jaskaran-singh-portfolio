import { MetadataRoute } from 'next'
import { blogService } from '@/lib/supabase/blog-service'

const BASE_URL = 'https://jaskaran.in' // TODO: Replace with your domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await blogService.getPosts({ page: 1 })

  const blogPosts = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

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
  ]

  return [...routes, ...blogPosts]
}
