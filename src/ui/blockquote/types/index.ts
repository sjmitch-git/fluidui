export interface BlockquoteProps {
  text: string;
  author?: string;
  footerAlign?: "left" | "right";
  cite?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
  style?: React.CSSProperties;
}
