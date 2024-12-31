'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { BlogCard } from '@/components/blog/blog-card'
import { BlogSearch } from '@/components/blog/blog-search'
import { BlogFilters } from '@/components/blog/blog-filters'
import { BlogPagination } from '@/components/blog/blog-pagination'
import { blogService } from '@/lib/supabase/blog-service'
import type { BlogPost } from '@/lib/supabase/types'

export const BlogList = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const currentPage = Number(searchParams.get('page')) || 1
  const search = searchParams.get('search') || ''
  const category = searchParams.get('category') || ''
  const tag = searchParams.get('tag') || ''
  const sortBy = (searchParams.get('sort') as keyof BlogPost) || 'published_date'

  const updateQueryParams = useCallback(
    (params: Record<string, string>) => {
      const newSearchParams = new URLSearchParams(searchParams)
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          newSearchParams.set(key, value)
        } else {
          newSearchParams.delete(key)
        }
      })
      router.push(`/blog?${newSearchParams.toString()}`)
    },
    [router, searchParams]
  )

  const handleSearch = useCallback(
    (query: string) => {
      updateQueryParams({ search: query, page: '1' })
    },
    [updateQueryParams]
  )

  const handleFilterChange = useCallback(
    (type: 'category' | 'tag' | 'sort', value: string) => {
      updateQueryParams({ [type]: value, page: '1' })
    },
    [updateQueryParams]
  )

  const handlePageChange = useCallback(
    (page: number) => {
      updateQueryParams({ page: page.toString() })
    },
    [updateQueryParams]
  )

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const result = await blogService.getPosts({
          page: currentPage,
          search,
          category,
          tag,
          sortBy,
        })
        setPosts(result.posts)
        setTotalPages(result.totalPages)
        setError(null)
      } catch (err) {
        setError('Failed to load blog posts')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [currentPage, search, category, tag, sortBy])

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <BlogSearch onSearch={handleSearch} />
        <BlogFilters
          categories={[]} // TODO: Fetch categories from API
          tags={[]} // TODO: Fetch tags from API
          onFilterChange={handleFilterChange}
          selectedCategory={category}
          selectedTag={tag}
          sortBy={sortBy}
        />
      </div>

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[300px] animate-pulse rounded-lg bg-muted"
            />
          ))}
        </div>
      ) : (
        <>
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No blog posts found.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </>
      )}

      {totalPages > 1 && (
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}
