import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BlogPost } from '@/lib/supabase/types';

type BlogFiltersProps = {
  categories: string[];
  tags: string[];
  onFilterChange: (type: 'category' | 'tag' | 'sort', value: string) => void;
  selectedCategory?: string;
  selectedTag?: string;
  sortBy: keyof BlogPost;
};

export const BlogFilters = ({
  categories,
  tags,
  onFilterChange,
  selectedCategory,
  selectedTag,
  sortBy,
}: BlogFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Select value={selectedCategory} onValueChange={(value) => onFilterChange('category', value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedTag} onValueChange={(value) => onFilterChange('tag', value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select tag" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Tags</SelectItem>
          {tags.map((tag) => (
            <SelectItem key={tag} value={tag}>
              {tag}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={sortBy} onValueChange={(value) => onFilterChange('sort', value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="published_date">Latest</SelectItem>
          <SelectItem value="title">Title</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
