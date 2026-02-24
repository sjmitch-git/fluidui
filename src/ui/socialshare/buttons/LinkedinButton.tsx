'use client'

import { FaLinkedin } from 'react-icons/fa'
import { Button } from '../..'
import { LinkedInButtonProps } from '../types'

const LinkedInButton = ({ btnShape, size, shareHomeOnly }: LinkedInButtonProps) => {
  const handleShareClick = () => {
    const baseUrl = "https://www.linkedin.com/sharing/share-offsite/";
    const shareUrl = new URL(baseUrl);
    const urlToShare = shareHomeOnly ? window.location.origin : window.location.href;
    shareUrl.searchParams.set("url", urlToShare);
    window.open(shareUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleShareClick}
      btnBackground="primary"
      btnColor="light"
      layout={btnShape}
      size={size}
      title={shareHomeOnly ? "Share site on LinkedIn" : "Share page on LinkedIn"}
      className="hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#0077B5]"
    >
      <FaLinkedin />
      <span className="sr-only">Share on LinkedIn</span>
    </Button>
  );
};

export default LinkedInButton
