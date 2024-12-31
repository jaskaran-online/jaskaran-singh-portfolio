import { Metadata } from 'next'
import { BlogPost } from '@/lib/supabase/types'

type BlogSeoProps = {
  post: BlogPost
  url: string
}

export const generateBlogPostMetadata = ({
  post,
  url,
}: BlogSeoProps): Metadata => {
  const { title, meta_description, featured_image, published_date, author_id } = post

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: meta_description,
    image: featured_image,
    datePublished: published_date,
    dateModified: post.updated_at,
    author: {
      '@type': 'Person',
      name: author_id, // TODO: Replace with actual author name
    },
    publisher: {
      '@type': 'Organization',
      name: 'Your Blog Name',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourblog.com/logo.png', // TODO: Replace with actual logo URL
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return {
    title: `${title} | Your Blog Name`,
    description: meta_description,
    openGraph: {
      title,
      description: meta_description,
      url,
      type: 'article',
      publishedTime: published_date,
      modifiedTime: post.updated_at,
      images: [
        {
          url: featured_image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: meta_description,
      images: [featured_image],
    },
    other: {
      'article:published_time': published_date,
      'article:modified_time': post.updated_at,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    authors: [
      {
        name: author_id, // TODO: Replace with actual author name
      },
    ],
  }
}
