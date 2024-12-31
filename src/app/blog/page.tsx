import { Metadata } from 'next'
import { BlogList } from './blog-list'
import { Pencil } from 'lucide-react'
import Link from 'next/link'

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
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        {/* Icon */}
        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
          <Pencil className="w-10 h-10 text-blue-500 dark:text-blue-400" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Blog Coming Soon
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
          I'm currently working on some interesting articles. Stay tuned for insightful content about web development, technology, and more.
        </p>

        {/* Call to Action */}
        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Want to get notified when new articles are published?{' '}
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              Contact me
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
