"use client";

import React, { useMemo } from "react";

import { AccordionHeadProps } from "../types";

import { Button } from "../..";

import { FaPlus, FaMinus, FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

const iconStyles = "aspect-square text-current w-6 group-[.text-sm]:w-4 group-[.text-lg]:w-8";

const iconPositionStyles = {
  left: "justify-end flex-row-reverse",
  right: "justify-between",
};

const layoutStyles = {
  default: "p-2",
  spaced: "p-2",
  flush: "py-2 px-0",
};

const AccordionHead = ({
  icon,
  iconPosition = "right",
  iconColor = "current",
  layout = "default",
  id,
  open,
  setopen,
  title,
  name,
}: AccordionHeadProps) => {
  const iconPositionClasses = useMemo(() => iconPositionStyles[iconPosition], [iconPosition]);
  const layoutnClasses = useMemo(() => layoutStyles[layout], [layout]);
  return (
    <h3
      className={`accordion-head ${iconPositionClasses} ${layoutnClasses} gap-1 peer font-semibold opacity-90 m-0 flex cursor-pointer items-center  text-xl group-[.text-sm]:text-lg group-[.text-lg]:text-2xl p-2 capitalize ${
        open === id ? "open" : ""
      }`}
      onClick={() => setopen(`${open === id ? "" : id}`)}
    >
      {title || name}

      <Button
        className="accordion-btn shadow-none !p-0"
        layout="circle"
        onClick={() => setopen(`${open === id ? "" : id}`)}
        btnBackground="transparent"
        btnColor={iconColor}
      >
        <>
          {open === id ? (
            icon === "symbol" ? (
              <FaMinus className={iconStyles} />
            ) : (
              <FaChevronDown className={iconStyles} />
            )
          ) : icon === "symbol" ? (
            <FaPlus className={iconStyles} />
          ) : iconPosition === "left" ? (
            <FaChevronRight className={iconStyles} />
          ) : (
            <FaChevronLeft className={iconStyles} />
          )}

          <span className="sr-only">Toggle section</span>
        </>
      </Button>
    </h3>
  );
};

export default AccordionHead;
