'use client'

import { MarkdownRenderer } from '../markdown-renderer'

interface MarkdownPreviewProps {
  content: string
}

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
  return (
    <div className="rounded-lg border bg-background p-4">
      <MarkdownRenderer content={content} />
    </div>
  )
}
