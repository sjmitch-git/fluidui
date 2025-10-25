"use client";

import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

import dynamic from "next/dynamic";

const XButton = dynamic(() => import("./buttons/XButton"), { ssr: false });
const FacebookButton = dynamic(() => import("./buttons/FacebookButton"), { ssr: false });
const LinkedInButton = dynamic(() => import("./buttons/LinkedinButton"), { ssr: false });
const SlackButton = dynamic(() => import("./buttons/SlackButton"), { ssr: false });
const WhatsAppButton = dynamic(() => import("./buttons/WhatsappButton"), { ssr: false });
const RedditButton = dynamic(() => import("./buttons/RedditButton"), { ssr: false });
const PinterestButton = dynamic(() => import("./buttons/PinterestButton"), { ssr: false });
const TelegramButton = dynamic(() => import("./buttons/TelegramButton"), { ssr: false });
const EmailButton = dynamic(() => import("./buttons/EmailButton"), { ssr: false });
const BlueskyButton = dynamic(() => import("./buttons/BlueskyButton"), { ssr: false });

import { SocialShareProps } from "./types";

const buttonComponents: Record<string, React.ComponentType<any>> = {
  X: XButton,
  Facebook: FacebookButton,
  LinkedIn: LinkedInButton,
  Slack: SlackButton,
  WhatsApp: WhatsAppButton,
  Reddit: RedditButton,
  Pinterest: PinterestButton,
  Telegram: TelegramButton,
  Email: EmailButton,
  Bluesky: BlueskyButton,
};

const gapSpacing = {
  none: "gap-0",
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3",
  xl: "gap-4",
};

const layouts = {
  horizontal: "flex-row",
  vertical: "flex-col",
};

const SocialShare = ({
  text,
  buttons,
  btnShape = "rounded",
  size = "md",
  gap = "none",
  layout = "horizontal",
  grayscale = false,
  className = "",
  style,
}: SocialShareProps) => {
  const gapClasses = useMemo(() => gapSpacing[gap], [gap]);
  const layoutClasses = useMemo(() => layouts[layout], [layout]);

  return (
    <div
      className={twMerge(
        `social-share w-fit flex flex-wrap items-center ${layoutClasses} ${gapClasses} ${
          grayscale ? "grayscale" : ""
        }`,
        className
      )}
      style={style}
    >
      {buttons.map((btn) => {
        const BtnComponent = buttonComponents[btn];
        if (!BtnComponent) return null;

        const needsText = !["Facebook", "LinkedIn"].includes(btn);
        const props = needsText ? { text } : {};

        return <BtnComponent key={btn} btnShape={btnShape} size={size} {...props} />;
      })}
    </div>
  );
};

export default SocialShare;
