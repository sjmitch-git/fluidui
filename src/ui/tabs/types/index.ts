export interface TabsProps {
  className?: string;
  tabStyles?: string;
  activeTabStyles?: string;
  children: React.ReactNode;
  defaultActiveId?: string;
  icons?: React.ReactNode[];
  minimalTabs?: boolean;
  contentBorder?: boolean;
  tabSize?: "sm" | "md" | "lg" | "xl" | "xxl";
  tabsPosition?: "left" | "center" | "right" | "full";
}

export interface TabProps {
  id: string;
  activeId?: string;
  title: React.ReactNode | string;
  tabStyles?: string;
  activeTabStyles?: string;
  onClick?: (id: string) => void | undefined;
}

export interface TabBarProps {
  className?: string;
  tabStyles?: string;
  activeTabStyles?: string;
  defaultActiveId?: string;
  tabs: TabProps[];
  activeId: string;
  tabsPosition?: "left" | "center" | "right" | "full";
  onClick: (id: string) => void | undefined;
}
