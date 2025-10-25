export interface CloseButtonProps {
  className?: string;
  layout?: "square" | "circle";
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  title?: string;
  hoverScale?: boolean;
}
