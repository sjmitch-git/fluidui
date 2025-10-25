export interface PictogramProps {
  labels: string[];
  tally: number[];
  icon?: React.ReactNode;
  caption?: string;
  captionSide?: "top" | "bottom";
  size?: "md" | "lg" | "xl";
  className?: string;
  style?: React.CSSProperties;
}
