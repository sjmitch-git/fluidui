import React, { useMemo } from "react";

import { twMerge } from "tailwind-merge";

import { BlockquoteProps } from "./types";

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xxl: "text-2xl",
};

const footerAligns = {
  left: "text-left",
  right: "text-right",
};

const Blockquote = ({
  text,
  author,
  footerAlign = "right",
  size = "md",
  cite,
  className = "",
  style,
}: BlockquoteProps) => {
  const sizeClasses = useMemo(() => sizes[size], [size]);
  const alignClasses = useMemo(() => footerAligns[footerAlign], [footerAlign]);

  return (
    <blockquote
      className={twMerge(
        `blockquote border-l-[.5em] border-gray-500 px-4 py-2 italic bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${sizeClasses}`,
        className
      )}
      cite={cite}
      style={style}
    >
      <p className="blockquote-text mb-2">&ldquo;{text}&rdquo;</p>
      {author && (
        <footer
          className={`blockquote-footer text-[.8em] ${alignClasses} font-semibold text-gray-700 dark:text-gray-300`}
        >
          — {author}
        </footer>
      )}
    </blockquote>
  );
};

export default Blockquote;
