import { useCallback, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useDebouncedCallback } from 'use-debounce'

type BlogSearchProps = {
  onSearch: (query: string) => void
}

export const BlogSearch = ({ onSearch }: BlogSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  const debouncedSearch = useDebouncedCallback((value: string) => {
    onSearch(value)
  }, 500)

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setSearchQuery(value)
      debouncedSearch(value)
    },
    [debouncedSearch]
  )

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search articles..."
        className="pl-10"
        value={searchQuery}
        onChange={handleSearch}
        aria-label="Search articles"
      />
    </div>
  )
}
