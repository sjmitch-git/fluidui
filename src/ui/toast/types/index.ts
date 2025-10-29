type BackgroundOption = "info" | "success" | "warning" | "danger" | "primary";

export interface ToastProps {
  className?: string;
  style?: React.CSSProperties;
  toastBackground?: BackgroundOption;
  body: React.ReactNode;
  open: boolean;
  autohideDuration?: number;
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "middle" | "bottom";
  rounded?: "none" | "md" | "lg" | "xl" | "full";
  autohide?: boolean;
  onClose: () => void;
  onClick?: () => void;
  closeOnBlur?: boolean;
  dismissable?: boolean;
}
