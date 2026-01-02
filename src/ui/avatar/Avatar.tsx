import Image from "next/image";
import { twMerge } from "tailwind-merge";
import md5 from "md5";
import { FaUser } from "react-icons/fa6";
import { AvatarProps, AvatarSize, AvatarLayout } from "./types";

const sizeClasses: Record<AvatarSize, string> = {
  sm: "w-8 h-8 text-xs",
  md: "w-12 h-12 text-sm",
  lg: "w-16 h-16 text-lg",
  xl: "w-24 h-24 text-2xl",
  xxl: "w-32 h-32 text-3xl",
};

const layoutClasses: Record<AvatarLayout, string> = {
  circle: "rounded-full",
  rounded: "rounded-xl",
  square: "rounded-none",
};

const Avatar = ({
  src,
  alt = "User avatar",
  name,
  email,
  size = "md",
  className,
  layout = "circle",
  gravatarType = "identicon",
}: AvatarProps) => {
  const hasImage = src && (src.startsWith("http") || src.startsWith("data:"));

  const gravatarUrl =
    email && `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}?d=${gravatarType}&s=256`;

  const initials =
    name
      ?.split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    const hasInitials = initials && initials.length > 0;

  return (
    <div
      className={twMerge(
        "relative flex shrink-0 items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold shadow-lg",
        sizeClasses[size],
        layoutClasses[layout],
        className
      )}
    >
      {hasImage ? (
        <Image src={src} alt={alt} fill className="object-cover" unoptimized />
      ) : gravatarUrl ? (
        <Image src={gravatarUrl} alt={alt} fill className="object-cover" unoptimized />
      ) : hasInitials ? (
        <span className="select-none">{initials}</span>
      ) : (
        <FaUser className="h-1/2 w-1/2 opacity-80" />
      )}
    </div>
  );
};

export default Avatar;
