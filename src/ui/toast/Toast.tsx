"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";

import { twMerge } from "tailwind-merge";

import { ToastProps } from "./types";
import { CloseButton } from "..";

const backgrounds = {
  info: "bg-info-light",
  success: "bg-success-light",
  warning: "bg-warning-light",
  danger: "bg-error-light",
  primary: "bg-primary-light",
};

const horizontals = {
  left: "left-4",
  center: "left-1/2 -translate-x-1/2",
  right: "right-4",
};

const verticals = {
  top: "top-4",
  middle: "top-1/2 -translate-y-1/2",
  bottom: "bottom-4",
};

const roundeds = {
  none: "rounded-none",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const Toast = ({
  toastBackground = "info",
  rounded = "md",
  open = false,
  body,
  horizontal = "center",
  vertical = "top",
  autohide = true,
  autohideDuration = 3000,
  className = "",
  style,
  onClose,
  onClick,
  closeOnBlur = true,
  dismissable = false,
}: ToastProps) => {
  const [show, setShow] = useState<boolean>(false);
  const toastRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) {
      setShow(true);
      toastRef.current?.focus();
      if (autohide) {
        const timer = setTimeout(() => {
          setShow(false);
          onClose && onClose();
        }, autohideDuration);
        return () => clearTimeout(timer);
      }
    } else {
      setShow(false);
    }

    return () => {
      setShow(false);
    };
  }, [open, autohide, autohideDuration, onClose]);

  const animationClasses = useMemo(() => {
    return `transition-opacity duration-500 ${
      show ? "visible opacity-100" : "invisible opacity-0"
    }`;
  }, [show]);

  const otherClasses = useMemo(() => {
    const horizontalClasses = horizontals[horizontal];
    const verticalClasses = verticals[vertical];
    const backgroundClasses = backgrounds[toastBackground];
    const roundedClasses = roundeds[rounded];

    return `${horizontalClasses} ${verticalClasses} ${backgroundClasses} ${roundedClasses}`;
  }, [horizontal, vertical, toastBackground, rounded]);

  const handleClick = onClick || onClose;

  return (
    <aside
      className={twMerge(
        `toast fixed z-50 text-dark py-4 px-6 max-w-64 shadow-lg ${className} ${otherClasses} ${animationClasses}`,
        className
      )}
      style={style}
      id="toast"
      role="alert"
      tabIndex={-1}
      ref={toastRef}
      onClick={handleClick}
      onBlur={() => {
        if (!closeOnBlur) return;
        setShow(false);
        onClose && onClose();
      }}
    >
      <div className="toast-body text-center">{body}</div>
      {dismissable && (
        <CloseButton
          layout="circle"
          size="md"
          onClick={() => {
            setShow(false);
            onClose && onClose();
          }}
          className="toast-close absolute -top-1 -right-1"
        />
      )}
    </aside>
  );
};

export default Toast;
