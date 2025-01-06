import { Metadata } from 'next'
import { BlogList } from './blog-list'
import { Pencil } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Jaskaran Singh',
  description: 'Read our latest articles and insights',
  openGraph: {
    title: 'Blog | Jaskaran Singh',
    description: 'Read our latest articles and insights',
    type: 'website',
    url: 'https://jaskaran.in/blog',
  },
  alternates: {
    canonical: 'https://jaskaran.in/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <BlogList />
      </div>
    </main>
  )
}
