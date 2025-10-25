import React from "react";
import { twMerge } from "tailwind-merge";
import { IconProps } from "./types";

const flipClasses = {
  flipX: "scale-x-[-1]",
  flipY: "scale-y-[-1]",
};

const rotateClasses = {
  none: "",
  45: "rotate-45",
  90: "rotate-90",
  135: "rotate-[135deg]",
  180: "rotate-180",
  225: "rotate-[225deg]",
  270: "-rotate-90",
  315: "rotate-[315deg]",
};

const baseUrl = "https://img.icons8.com";

const Icon = ({
  iconName,
  iconId,
  altText,
  iconSize = 40,
  iconColor,
  iconStyle,
  flipX = false,
  flipY = false,
  rotate = "none",
  className,
  style,
}: IconProps) => {
  const colorPath = iconStyle ? `${iconStyle}/` : iconColor ? `${iconColor.replace("#", "")}` : "";

  const queryParams = new URLSearchParams({
    size: iconSize.toString(),
    id: iconId || "4516",
    format: "png",
    color: colorPath || "000000",
  });

  let iconUrl = "";
  if (iconName) {
    iconUrl = `${baseUrl}/${colorPath}/${iconSize}/${iconName}.png`;
  } else {
    iconUrl = `${baseUrl}?${queryParams.toString()}`;
  }

  return (
    <img
      src={iconUrl}
      alt={altText || iconName || `Icon ID: ${iconId}`}
      width={iconSize}
      height={iconSize}
      className={twMerge(
        `icon ${flipX ? flipClasses.flipX : ""} ${flipY ? flipClasses.flipY : ""} ${
          rotateClasses[rotate]
        }`,
        className
      )}
      style={style}
    />
  );
};

export default Icon;
