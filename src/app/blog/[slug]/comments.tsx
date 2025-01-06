'use client';

import { useEffect, useState } from 'react';
import { CommentForm } from '@/components/blog/comments/comment-form';
import { CommentList } from '@/components/blog/comments/comment-list';
import { commentService } from '@/lib/supabase/comment-service';
import type { Comment } from '@/lib/supabase/types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type CommentsProps = {
  postId: string;
};

export const Comments = ({ postId }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();
  const [currentUserId, setCurrentUserId] = useState<string>();

  const fetchComments = async () => {
    try {
      const comments = await commentService.getComments(postId);
      setComments(comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setCurrentUserId(session?.user?.id);
    };

    checkAuth();
    fetchComments();

    // Subscribe to new comments
    const channel = supabase
      .channel('comments')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'comments',
          filter: `post_id=eq.${postId}`,
        },
        () => {
          fetchComments();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [postId, supabase]);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-32 animate-pulse rounded-lg bg-muted" />
        <div className="h-32 animate-pulse rounded-lg bg-muted" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      {currentUserId ? (
        <CommentForm postId={postId} onSuccess={fetchComments} />
      ) : (
        <p className="text-muted-foreground">Please sign in to leave a comment.</p>
      )}
      {comments.length > 0 ? (
        <CommentList
          postId={postId}
          comments={comments}
          onCommentUpdate={fetchComments}
          currentUserId={currentUserId}
        />
      ) : (
        <p className="text-center text-muted-foreground">
          No comments yet. Be the first to comment!
        </p>
      )}
    </div>
  );
};
