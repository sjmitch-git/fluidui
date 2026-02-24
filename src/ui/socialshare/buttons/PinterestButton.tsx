'use client'

import { FaPinterestP } from 'react-icons/fa'
import { Button } from '../..'
import { PinterestButtonProps } from '../types'

const PinterestButton = ({
  text,
  btnShape,
  size,
  shareHomeOnly,
}: PinterestButtonProps) => {
  const handleShareClick = () => {
    const baseUrl = "https://pinterest.com/pin/create/button/";
    const urlToShare = shareHomeOnly ? window.location.origin : window.location.href;
    const params = new URLSearchParams({
      description: text.replace(/(\r\n|\n|\r)/g, " "),
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
      title={shareHomeOnly ? 'Share site on Pinterest' : 'Share page on Pinterest'}
    >
      <FaPinterestP />
      <span className="sr-only">Share on Pinterest</span>
    </Button>
  );
};

export default PinterestButton
