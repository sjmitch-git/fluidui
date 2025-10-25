export interface PaginationProps {
  size?: "md" | "lg" | "xl";
  page: string;
  range: number;
  results: number;
  feedback?: boolean;
  feedbackLabel?: string;
  feedbackSeparator?: string;
  firstPageLabel?: string;
  lastPageLabel?: string;
  prevPageLabel?: string;
  nextPageLabel?: string;
  vertical?: boolean;
  icons?: boolean;
  minimal?: boolean;
  layout?: "horizontal" | "vertical";
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  btnShape?: "default" | "rounded" | "square" | "circle";
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
}
