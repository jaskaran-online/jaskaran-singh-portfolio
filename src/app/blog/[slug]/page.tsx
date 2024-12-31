import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import Image from 'next/image'
import { blogService } from '@/lib/supabase/blog-service'
import { generateBlogPostMetadata } from '@/components/blog/blog-seo'
import { Analytics } from '@/lib/analytics'
import { Comments } from './comments'

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await blogService.getPostBySlug(params.slug)
  if (!post) return {}

  const url = `https://yourblog.com/blog/${post.slug}` // TODO: Replace with actual domain
  return generateBlogPostMetadata({ post, url })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await blogService.getPostBySlug(params.slug)

  if (!post || post.status !== 'published') {
    notFound()
  }

  const formattedDate = format(new Date(post.published_date), 'MMMM dd, yyyy')

  return (
    <>
      <Analytics />
      <article className="prose prose-lg mx-auto max-w-4xl px-4 py-8">
        {post.featured_image && (
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <header className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <time dateTime={post.published_date}>{formattedDate}</time>
            <div className="flex gap-2">
              {post.categories.map((category: any) => (
                <span
                  key={category}
                  className="rounded-full bg-secondary px-3 py-1 text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div
          className="prose prose-lg prose-blue mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-8 border-t pt-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag : any) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-2 py-1 text-sm text-secondary-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      </article>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <Comments postId={post.id} />
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const { posts } = await blogService.getPosts({ page: 1 })
  return posts.map((post : any) => ({
    slug: post.slug,
  }))
}
