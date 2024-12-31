'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Image from 'next/image'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      className={className}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        },
        img({ src, alt }) {
          if (!src) return null
          return (
            <div className="relative my-8 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={alt || ''}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )
        },
        // Add custom styling for other markdown elements
        h1: ({ children }) => <h1 className="mb-6 text-4xl font-bold">{children}</h1>,
        h2: ({ children }) => <h2 className="mb-4 mt-8 text-3xl font-bold">{children}</h2>,
        h3: ({ children }) => <h3 className="mb-3 mt-6 text-2xl font-bold">{children}</h3>,
        p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
        ul: ({ children }) => <ul className="mb-4 list-disc pl-6">{children}</ul>,
        ol: ({ children }) => <ol className="mb-4 list-decimal pl-6">{children}</ol>,
        li: ({ children }) => <li className="mb-2">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic">
            {children}
          </blockquote>
        ),
        a: ({ children, href }) => (
          <a href={href} className="text-blue-600 hover:underline">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
