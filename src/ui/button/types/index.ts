export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  btnBackground?:
    | "dark"
    | "light"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "primary"
    | "secondary"
    | "transparent";
  btnColor?:
    | "dark"
    | "light"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "primary"
    | "secondary"
    | "current";
  layout?: "default" | "rounded" | "pill" | "square" | "circle";
  outline?: boolean;
  outlineColor?:
    | "dark"
    | "light"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "primary"
    | "secondary"
    | "current"
    | "accent";
  id?: string;
  title?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  tabindex?: number;
  role?: string;
  textcase?: "uppercase" | "lowercase" | "capitalize" | "normal-case";
  isBold?: boolean;
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  hoverScale?: boolean;
  suppressHydrationWarning?: boolean;
}
