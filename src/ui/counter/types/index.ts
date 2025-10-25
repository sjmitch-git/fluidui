export interface CounterProps extends React.HTMLAttributes<HTMLLabelElement> {
  name?: string;
  id?: string;
  min: number;
  max: number;
  value: number;
  step?: number;
  className?: string;
  label: string;
  labelIsBold?: boolean;
  layout?: "col" | "row";
  onCountChange: (count: number) => void;
  inputStyles?: string;
  btnShape?: "square" | "circle" | "rounded";
  btnBackground?: "info" | "primary" | "dark" | "light" | "transparent";
  btnColor?: "dark" | "light" | "current";
  size?: "md" | "lg";
  spacing?: "0" | "1" | "2" | "4";
  title?: string;
  hint?: boolean;
  rounded?: "none" | "md" | "lg" | "full";
}
