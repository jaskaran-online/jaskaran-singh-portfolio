import { supabase } from './config';
import { v4 as uuidv4 } from 'uuid';

export const storageService = {
  async uploadImage(file: File) {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from('public')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from('public').getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  },

  async deleteImage(url: string) {
    try {
      const path = url.split('/').pop();
      if (!path) throw new Error('Invalid image URL');

      const { error } = await supabase.storage.from('public').remove([`blog-images/${path}`]);

      if (error) throw error;
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  },
};
