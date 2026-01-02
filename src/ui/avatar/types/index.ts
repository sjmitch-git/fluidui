export type AvatarSize = "sm" | "md" | "lg" | "xl" | "xxl";
export type AvatarLayout = "circle" | "rounded" | "square";
export type GravatarType = "identicon" | "monsterid" | "wavatar" | "retro" | "robohash";

export interface AvatarProps {
  src?: string | null;
  alt?: string;
  name?: string | null;
  email?: string | null;
  size?: AvatarSize;
  layout?: AvatarLayout;
  gravatarType?: GravatarType;
  className?: string;
}