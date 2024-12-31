'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { blogService } from '@/lib/supabase/blog-service'
import { toast } from 'sonner'
import type { BlogPost } from '@/lib/supabase/types'

// Dynamic import of TipTap editor to reduce bundle size
const TipTapEditor = dynamic(() => import('./tiptap-editor'), {
  ssr: false,
  loading: () => <div className="h-64 animate-pulse rounded-md bg-muted" />,
})

const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  meta_description: z.string().min(1, 'Meta description is required'),
  featured_image: z.string().url('Must be a valid URL'),
  content: z.string().min(1, 'Content is required'),
  status: z.enum(['draft', 'published']),
  categories: z.array(z.string()),
  tags: z.array(z.string()),
})

type PostFormValues = z.infer<typeof postSchema>

type PostEditorProps = {
  postId?: string
  initialData?: BlogPost
}

export const PostEditor = ({ postId, initialData }: PostEditorProps) => {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)

  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: initialData?.title || '',
      slug: initialData?.slug || '',
      meta_description: initialData?.meta_description || '',
      featured_image: initialData?.featured_image || '',
      content: initialData?.content || '',
      status: initialData?.status || 'draft',
      categories: initialData?.categories || [],
      tags: initialData?.tags || [],
    },
  })

  const onSubmit = async (values: PostFormValues) => {
    try {
      setIsSaving(true)
      if (postId) {
        await blogService.updatePost(postId, values)
      } else {
        await blogService.createPost({
          ...values,
          published_date: values.status === 'published' ? new Date().toISOString() : null,
        })
      }
      toast.success('Post saved successfully')
      router.push('/admin/posts')
    } catch (error) {
      console.error('Error saving post:', error)
      toast.error('Failed to save post')
    } finally {
      setIsSaving(false)
    }
  }

  const generateSlug = useCallback((title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }, [])

  // Auto-generate slug from title
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'title' && !form.getValues('slug')) {
        form.setValue('slug', generateSlug(value.title || ''))
      }
    })
    return () => subscription.unsubscribe()
  }, [form, generateSlug])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="meta_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meta Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="featured_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Featured Image URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <TipTapEditor
                  content={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/posts')}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
