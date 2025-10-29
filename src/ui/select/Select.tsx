"use client";

import React, { useState, useEffect, useMemo } from "react";

import { twMerge } from "tailwind-merge";

import { SelectProps } from "./types";

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const Select = ({
  className = "",
  rows,
  dropdownSize = "md",
  onChange,
  placeholder,
  name = "select",
  disabled,
  options,
  children,
  defaultValue = "",
  rounded = "none",
  nocaret,
  style,
}: SelectProps) => {
  const [value, setValue] = useState<string | number>();

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setValue(value);
    if (onChange) onChange(event);
  };

  const sizeClasses = useMemo(() => sizes[dropdownSize], [dropdownSize]);

  const renderOptions = () => {
    return (Array.isArray(options) ? options : []).map((option) => {
      const optionValue =
        typeof option === "string" || typeof option === "number" ? option : option.value;
      const optionLabel =
        typeof option === "string" || typeof option === "number" ? option : option.label;

      return (
        <option key={optionValue} value={optionValue}>
          {optionLabel}
        </option>
      );
    });
  };

  return (
    <select
      name={name}
      onChange={handleChange}
      value={value}
      size={rows}
      disabled={disabled}
      className={twMerge(
        `form-select select-dropdown cursor-pointer border-2 border-slate-300 dark:border-slate-500 dark:bg-dark dark:text-light color-scheme:light font-normal dark:[color-scheme:dark] ${sizeClasses} rounded-${rounded}  ${
          nocaret ? "bg-none pr-3" : "bg-right"
        }`,
        className
      )}
      style={style}
      aria-label="select"
    >
      children ? {children} :
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {renderOptions()}
    </select>
  );
};

export default Select;
