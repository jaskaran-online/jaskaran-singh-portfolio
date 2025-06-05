'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ImagePlus, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  slug: string;
  created_at: string;
  updated_at: string;
  author_id: string;
  featured_image?: string;
}

export default function EditPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log('Fetching post with ID:', params.id);

        let { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', params.id)
          .single();

        if (error) {
          throw error;
        }

        if (!data) {
          toast.error('Post not found');
          router.push('/admin/posts');
          return;
        }

        console.log('Found post:', data);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        toast.error('Error loading post');
        router.push('/admin/posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id, router, supabase]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${params.id}.${fileExt}`;
    const filePath = `${fileName}`;

    setUploading(true);

    try {
      // Upload image to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('blogs')
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: publicURL } = supabase.storage.from('blogs').getPublicUrl(filePath);

      if (!publicURL) {
        throw new Error('Failed to get public URL');
      }

      // Update post with new image URL
      const { error: updateError } = await supabase
        .from('blog_posts')
        .update({ featured_image: publicURL.publicUrl })
        .eq('id', params.id);

      if (updateError) {
        throw updateError;
      }

      // Update local state
      setPost((post) => (post ? { ...post, featured_image: publicURL.publicUrl } : null));
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({
          title: post.title,
          content: post.content,
          updated_at: new Date().toISOString(),
        })
        .eq('id', post.id);

      if (error) throw error;

      toast.success('Post updated successfully');
      router.push('/admin/posts');
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error('Failed to update post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold">Post Not Found</h1>
        <Button onClick={() => router.push('/admin/posts')}>Back to Posts</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Edit Post</h1>
        <Button variant="outline" onClick={() => router.push('/admin/posts')}>
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Featured Image</label>
          <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed p-4">
            {post.featured_image ? (
              <div className="relative aspect-video w-full">
                <Image
                  src={post.featured_image}
                  alt="Featured image"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ) : null}
            <div className="flex items-center gap-2">
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className={`flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  uploading ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                {uploading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <ImagePlus className="h-5 w-5" />
                )}
                {uploading ? 'Uploading...' : 'Upload Image'}
              </label>
            </div>
          </div>
        </div>

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
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </div>
  );
}
