"use client";

import React, { useMemo } from "react";

import { twMerge } from "tailwind-merge";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BreadcrumbsProps } from "./types";

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const separators = {
  slash: 'before:content-["/"]',
  arrow: 'before:content-[">"]',
  pipe: 'before:content-["|"]',
  dot: 'before:content-["•"]',
};

const Breadcrumbs = ({
  className = "",
  style,
  size = "md",
  homeLabel = "Home",
  separator = "slash",
  activeLabel,
}: BreadcrumbsProps) => {
  const sizeClasses = useMemo(() => sizes[size], [size]);
  const separartorContent = useMemo(() => separators[separator], [separator]);

  const pathname = usePathname();
  let paths: string[] = [];
  if (pathname) paths = pathname.split("/");

  const buildHref = (path: string) => {
    for (let i = 0; i < paths.length; i++) {
      if (i === paths.length - 1) break;

      if (paths[1] === path) {
        return "/" + path;
      } else if (paths[2] === path) {
        return "/" + paths[1] + "/" + path;
      }
    }
    return "";
  };

  const displayPath = (path: string) => {
    return path.replaceAll("_", " ");
  };

  if (paths && paths.length === 2 && paths[paths.length - 1] === "")
    paths.length = paths.length - 1;

  return pathname === "/" ? (
    <nav></nav>
  ) : (
    <nav
      className={twMerge(
        `breadcrumbs group mx-auto w-full text-dark dark:text-light ${sizeClasses}`,
        className
      )}
      style={style}
      aria-label="breadcrumb"
      data-testid="breadcrumbs"
    >
      <ol className="flex flex-col md:flex-row">
        {paths.map((path, index) => (
          <li
            key={index}
            className={`breadcrumb ps-4 capitalize first:ps-0 before:inline-block ${separartorContent} rtl:before:scale-x-[-1] first:before:content-none before:pe-3 rtl:before:pe-0 rtl:before:ps-3   ${
              index === paths.length - 1 ? "active" : ""
            }`}
            aria-current={index === paths.length - 1 ? "page" : false}
          >
            {index === 0 ? (
              paths.length === 1 ? (
                `${homeLabel}`
              ) : (
                <Link href="/">{homeLabel}</Link>
              )
            ) : index === paths.length - 1 ? (
              displayPath(activeLabel || path)
            ) : (
              <Link href={buildHref(path)}>{displayPath(path)}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
