import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BlogNotFound() {
  return (
    <div className="container mx-auto flex min-h-[400px] flex-col items-center justify-center px-4 py-16 text-center">
      <h2 className="mb-4 text-3xl font-bold">Post Not Found</h2>
      <p className="mb-8 text-muted-foreground">
        The blog post you're looking for doesn't exist or has been removed.
      </p>
      <Button asChild>
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  )
}
