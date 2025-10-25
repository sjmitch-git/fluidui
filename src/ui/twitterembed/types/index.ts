export interface TwitterEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  handle: string;
  status: string;
  header?: boolean;
  borders?: boolean;
  transparent?: boolean;
  scrollbars?: boolean;
  theme?: "light" | "dark" | undefined;
  lang?: string;
}
