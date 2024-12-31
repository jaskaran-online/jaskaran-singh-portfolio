'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { Comment } from '@/lib/supabase/types'
import { CommentForm } from './comment-form'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreVertical, Reply } from 'lucide-react'
import { commentService } from '@/lib/supabase/comment-service'
import { toast } from 'sonner'

type CommentItemProps = {
  comment: Comment
  postId: string
  onCommentUpdate: () => void
  currentUserId?: string
  depth?: number
}

const MAX_DEPTH = 3

const CommentItem = ({
  comment,
  postId,
  onCommentUpdate,
  currentUserId,
  depth = 0,
}: CommentItemProps) => {
  const [isReplying, setIsReplying] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(comment.content)

  const handleReply = () => {
    setIsReplying(true)
  }

  const handleEdit = async () => {
    try {
      await commentService.updateComment(comment.id, editContent)
      setIsEditing(false)
      onCommentUpdate()
      toast.success('Comment updated successfully')
    } catch (error) {
      console.error('Error updating comment:', error)
      toast.error('Failed to update comment')
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this comment?')) return

    try {
      await commentService.deleteComment(comment.id)
      onCommentUpdate()
      toast.success('Comment deleted successfully')
    } catch (error) {
      console.error('Error deleting comment:', error)
      toast.error('Failed to delete comment')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarImage
            src={comment.author?.avatar_url}
            alt={comment.author?.full_name || 'User'}
          />
          <AvatarFallback>
            {comment.author?.full_name?.charAt(0) || 'U'}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold">
                {comment.author?.full_name || 'Anonymous'}
              </span>
              <span className="text-sm text-muted-foreground">
                {format(new Date(comment.created_at), 'MMM dd, yyyy')}
              </span>
            </div>
            {currentUserId === comment.author_id && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setIsEditing(true)}>
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={handleDelete}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          {isEditing ? (
            <div className="space-y-2">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full rounded-md border p-2"
                rows={3}
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={handleEdit}>
                  Save
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-sm">{comment.content}</p>
          )}
          {depth < MAX_DEPTH && !isReplying && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={handleReply}
            >
              <Reply className="h-4 w-4" />
              Reply
            </Button>
          )}
        </div>
      </div>

      {isReplying && (
        <div className="ml-12">
          <CommentForm
            postId={postId}
            parentId={comment.id}
            onSuccess={() => {
              setIsReplying(false)
              onCommentUpdate()
            }}
            onCancel={() => setIsReplying(false)}
          />
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-12 space-y-4">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              postId={postId}
              onCommentUpdate={onCommentUpdate}
              currentUserId={currentUserId}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

type CommentListProps = {
  postId: string
  comments: Comment[]
  onCommentUpdate: () => void
  currentUserId?: string
}

export const CommentList = ({
  postId,
  comments,
  onCommentUpdate,
  currentUserId,
}: CommentListProps) => {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          postId={postId}
          onCommentUpdate={onCommentUpdate}
          currentUserId={currentUserId}
        />
      ))}
    </div>
  )
}
