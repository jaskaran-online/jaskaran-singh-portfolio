'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  showFeatured: boolean;
  onFeaturedChange: (show: boolean) => void;
}

const ProjectFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  showFeatured,
  onFeaturedChange,
}: ProjectFilterProps) => {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {categories?.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category)}
            className="text-sm"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Switch id="featured" checked={showFeatured} onCheckedChange={onFeaturedChange} />
        <Label htmlFor="featured" className="flex cursor-pointer items-center gap-1.5">
          <Star className="h-4 w-4" />
          Featured Only
        </Label>
      </div>
    </div>
  );
};

export default ProjectFilter;
