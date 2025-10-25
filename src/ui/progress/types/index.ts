export interface ProgressProps {
  className?: string;
  feedbackClasses?: string;
  style?: React.CSSProperties;
  id?: string;
  totalSize: number;
  downloadedSize: number;
  unit?: "kb" | "mb" | "gb";
  doneMessage?: string;
  onDone?: () => void;
}
