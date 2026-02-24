export interface btnProps {
  btnShape?: "rounded" | "square" | "circle";
  size?: "md" | "lg" | "xl";
  shareHomeOnly?: boolean;
}

export type SocialShareButton =
  | "X"
  | "Facebook"
  | "LinkedIn"
  | "Slack"
  | "WhatsApp"
  | "Reddit"
  | "Pinterest"
  | "Telegram"
  | "Email"
  | "Bluesky";

export interface SocialShareProps extends btnProps {
  className?: string;
  style?: React.CSSProperties;
  layout?: "horizontal" | "vertical";
  text: string;
  buttons: SocialShareButton[];
  gap?: "none" | "sm" | "md" | "lg";
  grayscale?: boolean;
}

export interface ShareButtonWithTextProps extends btnProps {
  text: string;
}

export type XButtonProps = ShareButtonWithTextProps;
export type WhatsAppButtonProps = ShareButtonWithTextProps;
export type SlackButtonProps = ShareButtonWithTextProps;
export type TelegramButtonProps = ShareButtonWithTextProps;
export type RedditButtonProps = ShareButtonWithTextProps;
export type PinterestButtonProps = ShareButtonWithTextProps;
export type BlueskyButtonProps = ShareButtonWithTextProps;
export type EmailButtonProps = ShareButtonWithTextProps;

export type FacebookButtonProps = btnProps;
export type LinkedInButtonProps = btnProps;
