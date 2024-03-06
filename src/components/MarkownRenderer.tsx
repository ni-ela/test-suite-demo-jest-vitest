import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from "@/styles/Markdown.module.scss"

type MarkdownRendererProps = {
  children: string;
};

const Highlighter = ({ children, className, match, ...props }: any) => {
  return (
    <SyntaxHighlighter
      style={docco}
      showLineNumbers={true}
      lineNumberContainerStyle={{ paddingLeft: '20px' }}
      language={match[1]}
      PreTag="section"
      {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}

const CodeHighlighter = ({ inline, className, children, ...props }: any) => {
  return <code className={className} {...props}>{children}</code>
}

export function MarkdownRenderer({ children: markdown }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      className={styles.markdown}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');

          if (!inline && match) {
            return Highlighter({ children, className, match, ...props })
          }

          return CodeHighlighter({ inline, className, children, ...props })
        }}}
    >
      {markdown}
    </ReactMarkdown>
  );
}
