'use client'

import { useEffect, useState, use } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface Post {
  id: string
  title: string
  content: string
  published: boolean
}

export default function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const resolvedParams = use(params)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', resolvedParams.id)
          .single()

        if (error) {
          throw error
        }

        if (!data) {
          toast.error('Post not found')
          router.push('/admin/posts')
          return
        }

        setPost(data)
      } catch (error) {
        console.error('Error fetching post:', error)
        toast.error('Error loading post')
        router.push('/admin/posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [resolvedParams.id, router, supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!post) return

    setSaving(true)
    try {
      const { error } = await supabase
        .from('posts')
        .update({
          title: post.title,
          content: post.content,
          updated_at: new Date().toISOString(),
        })
        .eq('id', post.id)

      if (error) throw error

      toast.success('Post updated successfully')
      router.push('/admin/posts')
    } catch (error) {
      console.error('Error updating post:', error)
      toast.error('Failed to update post')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <Button onClick={() => router.push('/admin/posts')}>
          Back to Posts
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Edit Post</h1>
        <Button
          variant="outline"
          onClick={() => router.push('/admin/posts')}
        >
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">
            Title
          </label>
          <Input
            id="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="content" className="text-sm font-medium">
            Content
          </label>
          <Textarea
            id="content"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            required
            className="min-h-[300px]"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="submit"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </div>
  )
}
