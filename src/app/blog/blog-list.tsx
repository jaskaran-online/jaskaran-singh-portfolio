'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { Pencil } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  featured_image?: string;
  created_at: string;
  published: boolean;
}

export function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [supabase]);

  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse border p-4">
            <div className="mb-4 h-48 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
            <div className="mb-2 h-4 w-3/4 rounded bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-700"></div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20">
            <Pencil className="h-10 w-10 text-blue-500 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Blog Coming Soon</h2>
          <p className="mx-auto max-w-lg text-lg text-gray-600 dark:text-gray-400">
            I'm currently working on some interesting articles. Stay tuned for insightful content
            about web development, technology, and more.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="group block overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg dark:border-gray-800"
        >
          {post.featured_image && (
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {post.title}
            </h2>
            <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-400">{post.content}</p>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-500">
              {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
