'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { Markdown } from 'tiptap-markdown';
import { Toggle, ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Button } from '@/components/ui/button';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Undo,
  Link as LinkIcon,
  Image as ImageIcon,
  Eye,
  Code,
} from 'lucide-react';
import { ImageUpload } from '@/components/blog/image-upload';
import { MarkdownPreview } from '@/components/blog/markdown-preview';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type TipTapEditorProps = {
  content: string;
  onChange: (content: string) => void;
};

const TipTapEditor = ({ content, onChange }: TipTapEditorProps) => {
  const [isPreview, setIsPreview] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: 'Write something amazing...',
      }),
      Markdown.configure({
        html: true,
        transformPastedText: true,
        transformCopiedText: true,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-hidden',
      },
    },
    onUpdate: ({ editor }) => {
      // Get content as markdown
      const markdown = editor.storage.markdown.getMarkdown();
      onChange(markdown);
    },
  });

  if (!editor) {
    return null;
  }

  const handleLinkAdd = () => {
    const url = window.prompt('Enter URL');
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  };

  const handleImageUpload = (url: string) => {
    editor.chain().focus().setImage({ src: url }).run();
  };

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  const handleCodeBlock = () => {
    editor.chain().focus().toggleCodeBlock().run();
  };

  if (isPreview) {
    return (
      <div className="rounded-lg border">
        <div className="border-b bg-muted/50 p-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={togglePreview}
            className="text-muted-foreground"
          >
            <Code className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </div>
        <MarkdownPreview content={editor.storage.markdown.getMarkdown()} />
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      <div className="border-b bg-muted/50 p-2">
        <div className="flex flex-wrap items-center gap-2">
          <ToggleGroup type="multiple" className="flex flex-wrap gap-1">
            <ToggleGroupItem
              value="bold"
              aria-label="Toggle bold"
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-state={editor.isActive('bold') ? 'on' : 'off'}
            >
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="italic"
              aria-label="Toggle italic"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-state={editor.isActive('italic') ? 'on' : 'off'}
            >
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="bulletList"
              aria-label="Toggle bullet list"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              data-state={editor.isActive('bulletList') ? 'on' : 'off'}
            >
              <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="orderedList"
              aria-label="Toggle ordered list"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              data-state={editor.isActive('orderedList') ? 'on' : 'off'}
            >
              <ListOrdered className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="blockquote"
              aria-label="Toggle blockquote"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              data-state={editor.isActive('blockquote') ? 'on' : 'off'}
            >
              <Quote className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="codeBlock"
              aria-label="Toggle code block"
              onClick={handleCodeBlock}
              data-state={editor.isActive('codeBlock') ? 'on' : 'off'}
            >
              <Code className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLinkAdd}
              className="text-muted-foreground"
            >
              <LinkIcon className="h-4 w-4" />
            </Button>
            <ImageUpload onUpload={handleImageUpload}>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <ImageIcon className="h-4 w-4" />
              </Button>
            </ImageUpload>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
              className="text-muted-foreground"
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
              className="text-muted-foreground"
            >
              <Redo className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={togglePreview}
            className="ml-auto text-muted-foreground"
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
        </div>
      </div>
      <EditorContent editor={editor} className="min-h-[500px] p-4" />
    </div>
  );
};

export default TipTapEditor;
