'use client'

import { MdEmail } from 'react-icons/md'
import { Button } from '../..'
import { EmailButtonProps } from "../types";

const EmailButton = ({ text, btnShape, size, shareHomeOnly }: EmailButtonProps) => {
  const handleShareClick = () => {
    const subject = encodeURIComponent(document.title);
    const urlToShare = shareHomeOnly ? window.location.origin : window.location.href;
    const body = encodeURIComponent(`${text}\n\n${urlToShare}`);
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleShareClick}
      btnBackground="info"
      btnColor="light"
      layout={btnShape}
      size={size}
      title={shareHomeOnly ? "Share site via Email" : "Share page via Email"}
      className="hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#0072C6]"
    >
      <MdEmail />
      <span className="sr-only">Share via Email</span>
    </Button>
  );
};

export default EmailButton
