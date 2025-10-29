import React, { useMemo } from "react";

import { twMerge } from "tailwind-merge";

import { BadgeProps } from "./types";

const backgrounds = {
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  primary: "bg-primary",
  secondary: "bg-secondary",
  dark: "bg-slate-700",
  light: "bg-white",
  accent: "bg-accent",
  neutral: "bg-neutral",
  transparent: "bg-transparent",
};

const colors = {
  info: "!text-info",
  success: "text-success",
  warning: "text-warning",
  danger: "!text-danger",
  primary: "text-primary",
  secondary: "text-secondary",
  dark: "text-dark",
  light: "text-light",
  accent: "text-accent",
  current: "text-current",
  neutral: "text-neutral",
};

const layouts = {
  square: "aspect-square p-[.15em] leading-3",
  circle: "rounded-full aspect-square p-[.175em] leading-3",
  rounded: "rounded-md px-[.25em] py-[.1em] leading-5",
  pill: "rounded-full px-[.25em] py-[.1em] leading-5",
};

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  inherit: "text-[60%]",
};

const positions = {
  inline: "relative -top-3",
  right: "absolute end-0 top-0",
  left: "absolute -start-6",
};

const Badge = ({
  className = "",
  style,
  layout = "circle",
  badgeBackground = "info",
  badgeColor = "dark",
  position = "inline",
  children,
  size = "inherit",
}: BadgeProps) => {
  const layoutClasses = useMemo(() => layouts[layout], [layout]);
  const backgroundClasses = useMemo(() => backgrounds[badgeBackground], [badgeBackground]);
  const colorClasses = useMemo(() => colors[badgeColor], [badgeColor]);
  const positionClasses = useMemo(() => positions[position], [position]);
  const sizeClasses = useMemo(() => sizes[size], [size]);

  return (
    <small
      className={twMerge(
        `badge group inline-block leading-none min-w-[1em] ${sizeClasses} ${layoutClasses} ${backgroundClasses} ${colorClasses} ${positionClasses}`,
        className
      )}
      style={style}
      data-testid="badge"
    >
      <span className="flex items-center gap-1">{children}</span>
    </small>
  );
};

export default Badge;
