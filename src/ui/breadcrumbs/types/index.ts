export interface BreadcrumbsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  homeLabel?: string;
  activeLabel?: string;
  separator?: "slash" | "arrow" | "pipe" | "dot";
  prefetch?: boolean;
}
