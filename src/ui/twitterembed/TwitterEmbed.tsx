"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Loading, Alert } from "..";
import { TwitterEmbedProps } from "./types";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element: HTMLElement) => void;
      };
      events: {
        bind: (event: string, callback: () => void) => void;
      };
    };
  }
}

const loadTwitterScript = () => {
  return new Promise<void>((resolve, reject) => {
    if (window.twttr && window.twttr.widgets) {
      resolve();
      return;
    }

    if (document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.id = "twitter-wjs";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load X script"));
    document.body.appendChild(script);
  });
};

export const TwitterEmbed = ({
  handle,
  lang = "en",
  status,
  theme,
  header = false,
  borders = false,
  transparent = false,
  scrollbars = false,
  className = "",
  style,
}: TwitterEmbedProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const embedRef = useRef<HTMLDivElement>(null);
  const renderedCallbackRef = useRef<() => void>(() => {});

  const chrome = useMemo(() => {
    return [
      !header ? "noheader" : "",
      !borders ? "noborders" : "",
      transparent ? "transparent" : "",
      !scrollbars ? "noscrollbars" : "",
    ]
      .filter(Boolean)
      .join(" ");
  }, [header, borders, transparent, scrollbars]);

  useEffect(() => {
    let isMounted = true;
    let timeout: NodeJS.Timeout;

    const initializeWidget = async () => {
      try {
        await loadTwitterScript();

        if (!isMounted) return;

        if (window.twttr && window.twttr.widgets && embedRef.current) {
          renderedCallbackRef.current = () => {
            if (isMounted) {
              setLoading(false);
              clearTimeout(timeout);
            }
          };
          window.twttr.events.bind("rendered", renderedCallbackRef.current);

          window.twttr.widgets.load(embedRef.current);
        } else {
          setError("Widget not available");
          clearTimeout(timeout);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load widget. Try the link below.");
          clearTimeout(timeout);
          setLoading(false);
        }
      }
    };

    initializeWidget();

    timeout = setTimeout(() => {
      if (isMounted && loading) {
        setError("Widget took too long to load. Try the link below.");
        setLoading(false);
      }
    }, 12000);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
      if (window.twttr && window.twttr.events && renderedCallbackRef.current) {
        window.twttr.events.bind("rendered", renderedCallbackRef.current);
      }
    };
  }, []);

  return (
    <div
      className={twMerge(
        `twitter-wrap flex flex-col justify-center w-full dark:text-light`,
        className
      )}
      style={style}
    >
      {loading && !error && (
        <div className="loading-spinner py-8 text-info flex w-full justify-center mb-8">
          <Loading loadingColor="info" size="md" spinner="dots" caption="Loading" />
        </div>
      )}
      {error && (
        <div className="py-8 mb-8">
          <Alert status="error" message={error} title="Oops!" />
        </div>
      )}
      <div ref={embedRef} className="flex flex-col justify-center">
        {status ? (
          <blockquote
            className="twitter-tweet mx-auto"
            data-theme={theme}
            data-lang={lang}
            data-chrome={chrome}
          >
            <a
              href={`https://twitter.com/${handle}/status/${status}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{handle}
            </a>
          </blockquote>
        ) : (
          <div className="text-center">
            <Alert
              status="error"
              message="No post ID provided. Please specify a valid status ID."
              title="Error"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TwitterEmbed;
