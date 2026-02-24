'use client'

import { FaRedditAlien } from 'react-icons/fa'
import { Button } from '../..'
import { RedditButtonProps } from "../types";

const RedditButton = ({ text, btnShape, size, shareHomeOnly }: RedditButtonProps) => {
  const handleShareClick = () => {
    const baseUrl = "https://www.reddit.com/submit";
    const urlToShare = shareHomeOnly ? window.location.origin : window.location.href;
    const params = new URLSearchParams({
      title: text.replace(/(\r\n|\n|\r)/g, " "),
      url: urlToShare,
    });
    const shareUrl = `${baseUrl}?${params.toString()}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleShareClick}
      btnBackground="danger"
      btnColor="light"
      layout={btnShape}
      size={size}
      title={shareHomeOnly ? "Share site on Reddit" : "Share page on Reddit"}
      className="hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#FF4500]"
    >
      <FaRedditAlien />
      <span className="sr-only">Share on Reddit</span>
    </Button>
  );
};

export default RedditButton
