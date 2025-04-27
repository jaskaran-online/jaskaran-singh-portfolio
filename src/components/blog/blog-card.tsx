import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { type BlogPost } from '@/lib/supabase/types';
import { cn } from '@/lib/utils';

type BlogCardProps = {
  post: BlogPost;
  className?: string;
};

export const BlogCard = ({ post, className }: BlogCardProps) => {
  const formattedDate = format(new Date(post.published_date), 'MMMM dd, yyyy');

  return (
    <article
      className={cn(
        'group relative flex flex-col space-y-2 rounded-lg border bg-card p-4 shadow-xs transition-all hover:shadow-md',
        className
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0"
        tabIndex={-1}
        aria-hidden="true"
      />
      {post.featured_image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={post.featured_image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      )}
      <div className="flex-1 space-y-2">
        <h2 className="line-clamp-2 text-2xl font-bold tracking-tight">{post.title}</h2>
        <p className="line-clamp-3 text-muted-foreground">{post.meta_description}</p>
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <time dateTime={post.published_date}>{formattedDate}</time>
        <div className="flex gap-2">
          {post.categories.slice(0, 2).map((category) => (
            <span key={category} className="rounded-full bg-secondary px-2 py-0.5 text-xs">
              {category}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
