"use client";

import React, { useState, useMemo, useEffect } from "react";

import { twMerge } from "tailwind-merge";

import { FigureProps } from "./types";
import { Modal } from "..";

const aspects = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  circle: "aspect-square",
  video: "aspect-video",
  ultrawide: "aspect-[12/5]",
  phone: "aspect-[9/16]",
  auto: "aspect-auto",
};

const Figure = ({
  className = "",
  caption = "",
  aspect = "landscape",
  src,
  alt,
  backdrop = "dark",
  preload = false,
}: FigureProps) => {
  const [open, setOpen] = useState(false);
  const aspectClasses = useMemo(() => aspects[aspect], [aspect]);

  useEffect(() => {
    if (!preload || !src) return;

    const href = src;
    const existingLink = document.querySelector(`link[rel="preload"][href="${href}"]`);

    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      document.head.appendChild(link);
    }

    return () => {
      const linkToRemove = document.querySelector(`link[rel="preload"][href="${href}"]`);
      if (linkToRemove) {
        document.head.removeChild(linkToRemove);
      }
    };
  }, [preload, src]);

  return (
    <>
      <figure
        className={twMerge(`figure group relative h-auto min-w-full ${aspectClasses}`, className)}
      >
        <img
          src={src}
          className={`img object-cover absolute h-full w-full inset-0 text-transparent cursor-zoom-in ${
            aspect === "circle" ? "rounded-full" : ""
          }`}
          alt={alt}
          onClick={() => setOpen(true)}
        />

        {caption && (
          <figcaption className="figcaption line-clamp-2 py-2 text-center absolute bottom-0 w-full bg-gray-700/50 text-light">
            {caption}
          </figcaption>
        )}
      </figure>
      <Modal
        src={src}
        caption={caption || alt}
        alt={alt}
        onClick={() => setOpen(false)}
        open={open}
        theme={backdrop}
      />
    </>
  );
};

export default Figure;
