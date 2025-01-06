'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { blogService } from '@/lib/supabase/blog-service';
import type { BlogPost } from '@/lib/supabase/types';
import { MoreHorizontal, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { posts } = await blogService.getPosts({ page: 1, showAll: true });
      setPosts(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSelectAll = (checked: boolean) => {
    setSelectedPosts(checked ? posts.map((post) => post.id) : []);
  };

  const handleSelectPost = (postId: string, checked: boolean) => {
    setSelectedPosts((prev) => (checked ? [...prev, postId] : prev.filter((id) => id !== postId)));
  };

  const handleDelete = async (postId: string) => {
    try {
      await blogService.deletePost(postId);
      setPosts((prev) => prev.filter((post) => post.id !== postId));
      toast.success('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Failed to delete post');
    }
  };

  const handleBulkAction = async (action: 'publish' | 'unpublish' | 'delete') => {
    try {
      if (action === 'delete') {
        await blogService.bulkDelete(selectedPosts);
        setPosts((prev) => prev.filter((post) => !selectedPosts.includes(post.id)));
      } else {
        await blogService.bulkUpdateStatus(
          selectedPosts,
          action === 'publish' ? 'published' : 'draft'
        );
        setPosts((prev) =>
          prev.map((post) =>
            selectedPosts.includes(post.id)
              ? { ...post, status: action === 'publish' ? 'published' : 'draft' }
              : post
          )
        );
      }
      setSelectedPosts([]);
      toast.success(`Posts ${action}ed successfully`);
    } catch (error) {
      console.error(`Error ${action}ing posts:`, error);
      toast.error(`Failed to ${action} posts`);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link href="/admin/posts/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>

      {selectedPosts.length > 0 && (
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => handleBulkAction('publish')}>
            Publish Selected
          </Button>
          <Button variant="outline" onClick={() => handleBulkAction('unpublish')}>
            Unpublish Selected
          </Button>
          <Button variant="destructive" onClick={() => handleBulkAction('delete')}>
            Delete Selected
          </Button>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={posts.length > 0 && selectedPosts.length === posts.length}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all posts"
                />
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Published Date</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedPosts.includes(post.id)}
                    onCheckedChange={(checked) => handleSelectPost(post.id, checked)}
                    aria-label={`Select ${post.title}`}
                  />
                </TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
                      {
                        'bg-green-100 text-green-700': post.status === 'published',
                        'bg-yellow-100 text-yellow-700': post.status === 'draft',
                      }
                    )}
                  >
                    {post.status}
                  </span>
                </TableCell>
                <TableCell>
                  {post.published_date
                    ? format(new Date(post.published_date), 'MMM dd, yyyy')
                    : '-'}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => (window.location.href = `/admin/posts/${post.id}`)}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
