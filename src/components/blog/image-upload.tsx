'use client';

import { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ImagePlus, Loader2 } from 'lucide-react';
import { storageService } from '@/lib/supabase/storage-service';
import { toast } from 'sonner';

type ImageUploadProps = {
  onUpload: (url: string) => void;
};

export const ImageUpload = ({ onUpload }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const file = event.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
          toast.error('Please upload an image file');
          return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          toast.error('Image size should be less than 5MB');
          return;
        }

        setUploading(true);
        const url = await storageService.uploadImage(file);
        onUpload(url);
        toast.success('Image uploaded successfully');
      } catch (error) {
        console.error('Error uploading image:', error);
        toast.error('Failed to upload image');
      } finally {
        setUploading(false);
      }
    },
    [onUpload]
  );

  return (
    <div className="flex items-center gap-2">
      <Input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
        className="hidden"
        id="image-upload"
      />
      <Button variant="outline" disabled={uploading} asChild>
        <label htmlFor="image-upload" className="cursor-pointer">
          {uploading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <ImagePlus className="mr-2 h-4 w-4" />
          )}
          Upload Image
        </label>
      </Button>
    </div>
  );
};
