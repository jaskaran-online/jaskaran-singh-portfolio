import { PostEditor } from './post-editor'
import { blogService } from '@/lib/supabase/blog-service'

export default async function EditPostPage({
  params,
}: {
  params: { id: string }
}) {
  const post = await blogService.getPostBySlug(params.id)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <PostEditor postId={params.id} initialData={post} />
    </div>
  )
}
