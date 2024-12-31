'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { commentService } from '@/lib/supabase/comment-service'
import { toast } from 'sonner'

type CommentFormProps = {
  postId: string
  parentId?: string | null
  onSuccess: () => void
  onCancel?: () => void
}

export const CommentForm = ({
  postId,
  parentId = null,
  onSuccess,
  onCancel,
}: CommentFormProps) => {
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    try {
      setIsSubmitting(true)
      await commentService.addComment({
        post_id: postId,
        parent_id: parentId,
        content: content.trim(),
        author_id: 'current-user-id', // TODO: Get from auth context
      })
      setContent('')
      onSuccess()
      toast.success('Comment added successfully')
    } catch (error) {
      console.error('Error adding comment:', error)
      toast.error('Failed to add comment')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        required
        disabled={isSubmitting}
      />
      <div className="flex items-center gap-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}
