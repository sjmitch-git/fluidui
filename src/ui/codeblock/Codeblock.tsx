"use client";

import React, { useEffect, useMemo } from "react";
import Prism from "prismjs";

import { CodeblockProps } from "./types";

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xxl: "text-2xl",
};

const Codeblock = ({
  language = "plaintext",
  size = "md",
  children,
}: CodeblockProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  const sizeClasses = useMemo(() => sizes[size], [size]);

  return (
    <pre className={`codeblock ${sizeClasses}`}>
      <code className={`language-${language} !whitespace-pre-wrap`}>
        {children}
      </code>
    </pre>
  );
};

export default Codeblock;
