'use client'

import { FaBluesky } from 'react-icons/fa6'

import { Button } from '../..'
import { BlueskyButtonProps } from "../types";

const BlueskyButton = ({ text, btnShape, size, shareHomeOnly }: BlueskyButtonProps) => {
  const handleShareClick = () => {
    const baseUrl = "https://bsky.app/compose";
    const urlToShare = shareHomeOnly ? window.location.origin : window.location.href;
    const params = new URLSearchParams({
      text: `${text} ${urlToShare}`.replace(/(\r\n|\n|\r)/g, " "),
    });
    const shareUrl = `${baseUrl}?${params.toString()}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleShareClick}
      btnBackground="info"
      btnColor="light"
      layout={btnShape}
      size={size}
      title={shareHomeOnly ? "Share site on Bluesky" : "Share page on Bluesky"}
      className="hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#0097FF]"
    >
      <FaBluesky />
      <span className="sr-only">Share on Bluesky</span>
    </Button>
  );
};

export default BlueskyButton
