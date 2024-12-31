import { Metadata } from 'next'
import { BlogList } from './blog-list'

export const metadata: Metadata = {
  title: 'Blog | Your Name',
  description: 'Read our latest articles and insights',
  openGraph: {
    title: 'Blog | Your Name',
    description: 'Read our latest articles and insights',
    type: 'website',
    url: 'https://yourwebsite.com/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <BlogList />
      </div>
    </main>
  )
}
