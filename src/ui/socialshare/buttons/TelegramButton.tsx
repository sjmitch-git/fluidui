'use client'

import { FaTelegramPlane } from 'react-icons/fa'
import { Button } from '../..'
import { TelegramButtonProps } from "../types";

const TelegramButton = ({ text, btnShape, size, shareHomeOnly }: TelegramButtonProps) => {
  const handleShareClick = () => {
    const baseUrl = "https://t.me/share/url";
    const urlToShare = shareHomeOnly ? window.location.origin : window.location.href;
    const params = new URLSearchParams({
      url: urlToShare,
      text: text.replace(/(\r\n|\n|\r)/g, " "),
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
      title={shareHomeOnly ? "Share site on Telegram" : "Share page on Telegram"}
      className="hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#229ED9]"
    >
      <FaTelegramPlane />
      <span className="sr-only">Share on Telegram</span>
    </Button>
  );
};

export default TelegramButton
