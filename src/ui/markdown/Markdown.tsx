import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { twMerge } from "tailwind-merge";
import { MarkdownProps } from "./types";

const Markdown = ({
  content,
  prismStyle = solarizedlight,
  showLineNumbers = false,
  className,
}: MarkdownProps) => {
  return (
    <div className={twMerge(`markdown prose mx-auto dark:prose-invert`, className)}>
      <ReactMarkdown
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            if (match) {
              return (
                <SyntaxHighlighter
                  style={prismStyle}
                  language={match[1]}
                  showLineNumbers={showLineNumbers}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          pre({ children }) {
            return <>{children}</>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
