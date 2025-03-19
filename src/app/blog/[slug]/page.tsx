import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import Image from 'next/image';
import { blogService } from '@/lib/supabase/blog-service';
import { generateBlogPostMetadata } from '@/components/blog/blog-seo';

import { Comments } from './comments';
import { MarkdownRenderer } from '@/components/markdown-renderer';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await blogService.getPostBySlug(params.slug);
  if (!post) return {};

  const url = `https://jaskaran.in/blog/${post.slug}`;
  return {
    ...generateBlogPostMetadata({ post, url }),
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await blogService.getPostBySlug(params.slug);

  if (!post || post.status !== 'published') {
    notFound();
  }

  const formattedDate = format(new Date(post.published_date), 'MMMM dd, yyyy');

  return (
    <>
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
          <h1 className="mb-4 text-4xl font-bold tracking-tight">{post.title}</h1>
          <div className="text-gray-600">
            <time dateTime={post.published_date}>{formattedDate}</time>
            {post.categories?.length > 0 && (
              <>
                <span className="mx-2">•</span>
                <span>{post.categories.join(', ')}</span>
              </>
            )}
          </div>
        </header>

        <div className="markdown-content">
          <MarkdownRenderer content={post.content} />
        </div>

        {post.tags?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <Comments postId={post.id} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  try {
    const { posts } = await blogService.getPosts({ page: 1 });
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn('Warning: Could not fetch posts for static params:', error);
    return [];
  }
}
