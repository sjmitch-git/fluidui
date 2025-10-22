export interface CodeblockProps {
  style?: React.CSSProperties;
  children: string;
  language?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
}
