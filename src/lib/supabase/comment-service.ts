import { supabase } from './config'
import type { Comment } from './types'

export const commentService = {
  async getComments(postId: string) {
    const { data: comments, error } = await supabase
      .from('comments')
      .select(`
        *,
        author:authors(*)
      `)
      .eq('post_id', postId)
      .order('created_at', { ascending: true })

    if (error) throw error

    // Organize comments into a tree structure
    const commentMap = new Map<string, Comment>()
    const rootComments: Comment[] = []

    comments.forEach((comment: Comment) => {
      commentMap.set(comment.id, { ...comment, replies: [] })
    })

    comments.forEach((comment: Comment) => {
      if (comment.parent_id) {
        const parentComment = commentMap.get(comment.parent_id)
        if (parentComment) {
          parentComment.replies = parentComment.replies || []
          parentComment.replies.push(commentMap.get(comment.id)!)
        }
      } else {
        rootComments.push(commentMap.get(comment.id)!)
      }
    })

    return rootComments
  },

  async addComment(comment: Comment['Insert']) {
    const { data, error } = await supabase
      .from('comments')
      .insert(comment)
      .select(`
        *,
        author:authors(*)
      `)
      .single()

    if (error) throw error
    return data
  },

  async updateComment(id: string, content: string) {
    const { data, error } = await supabase
      .from('comments')
      .update({ content })
      .eq('id', id)
      .select(`
        *,
        author:authors(*)
      `)
      .single()

    if (error) throw error
    return data
  },

  async deleteComment(id: string) {
    const { error } = await supabase.from('comments').delete().eq('id', id)
    if (error) throw error
  },
}
