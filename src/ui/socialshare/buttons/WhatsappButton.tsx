'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../..'
import { WhatsAppButtonProps } from '../types'

const WhatsAppButton = ({ text, btnShape, size, shareHomeOnly }: WhatsAppButtonProps) => {
  const handleShareClick = () => {
    const baseUrl = "https://api.whatsapp.com/send";
    const shareUrl = new URL(baseUrl);
    const urlToShare = shareHomeOnly ? window.location.origin : window.location.href;
    shareUrl.searchParams.set("text", `${text}: ${urlToShare}`);
    window.open(shareUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleShareClick}
      btnBackground="primary"
      btnColor="light"
      layout={btnShape}
      size={size}
      title={shareHomeOnly ? "Share site on WhatsApp" : "Share page on WhatsApp"}
      className="hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#25D366]"
    >
      <FaWhatsapp />
      <span className="sr-only">Share on WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton
