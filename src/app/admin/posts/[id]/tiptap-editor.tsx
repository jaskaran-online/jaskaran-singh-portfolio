'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import {
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group'
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
} from 'lucide-react'
import { ImageUpload } from '@/components/blog/image-upload'
import { cn } from '@/lib/utils'

type TipTapEditorProps = {
  content: string
  onChange: (content: string) => void
}

const TipTapEditor = ({ content, onChange }: TipTapEditorProps) => {
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
    ],
    content,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) {
    return null
  }

  const handleLinkAdd = () => {
    const url = window.prompt('Enter URL')
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    }
  }

  const handleImageUpload = (url: string) => {
    editor.chain().focus().setImage({ src: url }).run()
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
              value="link"
              aria-label="Add link"
              onClick={handleLinkAdd}
              data-state={editor.isActive('link') ? 'on' : 'off'}
            >
              <LinkIcon className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="ml-auto">
            <ImageUpload onUpload={handleImageUpload} />
          </div>
        </div>
      </div>
      <EditorContent
        editor={editor}
        className="min-h-[200px] p-4"
      />
    </div>
  )
}

export default TipTapEditor
