"use client";

import React, { useMemo } from "react";

import { twMerge } from "tailwind-merge";

import { forwardRef } from "react";

import { InputProps } from "./types";

export type InputRef = HTMLInputElement;

const sizes = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
};

const darkthemeClasses = "dark:bg-dark dark:text-light";

const typeClasses = (type: string) => {
  return type === "checkbox"
    ? `form-checkbox rounded-md w-[1.5em] h-[1.5em] cursor-pointer !check:dark:bg-dark !text-info border-neutral border-2`
    : type === "radio"
    ? "form-radio w-[1.5em] h-[1.5em] cursor-pointer bg-transparent !text-info border-2"
    : type === "color"
    ? "form-color cursor-pointer aspect-square w-[2em] h-[2em] border-neutral border-2"
    : type === "number"
    ? `form-input text-center ${darkthemeClasses} [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none me-4`
    : type === "file"
    ? "hidden"
    : type === "range"
    ? "appearance-none h-[.5em] w-full [&&::-webkit-slider-thumb]:cursor-grab [&&::-webkit-slider-thumb]:appearance-none [&&::-webkit-slider-thumb]:h-[1em] [&&::-webkit-slider-thumb]:w-[1em] [&&::-webkit-slider-thumb]:bg-current"
    : `form-input w-full border-neutral ${darkthemeClasses} read-only:cursor-default read-only:bg-transparent read-only:!border-none`;
};

const styles = {
  required: "!bg-[var(--highlight-color)] !text-dark",
};

const Input = forwardRef<InputRef, InputProps>(function Input(props, ref) {
  const {
    type = "text",
    size = "md",
    autocomplete = "off",
    name = "control-name",
    id,
    className = "",
    style,
    rounded = "md",
    required = false,
    readonly = false,
    disabled = false,
    hint = false,
    tabindex,
    min,
    max,
    minLength,
    maxLength,
    step,
    pattern,
    title,
    value,
    defaultChecked,
    accept,
    multiple,
    placeholder,
    list,
    onChange,
    onFocus,
    onBlur,
    hidden,
    ariaLabel,
    autocorrect,
    spellcheck,
    suppressHydrationWarning = false,
  } = props;

  const sizeClasses = useMemo(() => sizes[size], [size]);

  return (
    <>
      <input
        className={twMerge(
          `input ${typeClasses(
            type
          )} peer ${sizeClasses} rounded-${rounded} font-normal color-scheme:light dark:[color-scheme:dark] focus:outline-none focus-visible:outline-none focus-visible:border-info disabled:bg-neutral disabled:cursor-default disabled:text-dark disabled:border-transparent invalid:!border-warning-dark invalid:dark:!border-warning-light`,
          className
        )}
        style={style}
        type={type}
        name={name}
        id={id}
        autoComplete={autocomplete}
        required={required}
        aria-required={required}
        hidden={hidden}
        readOnly={readonly}
        tabIndex={tabindex}
        ref={ref}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        step={step}
        pattern={pattern}
        title={title}
        placeholder={placeholder}
        defaultValue={value}
        defaultChecked={defaultChecked}
        accept={accept}
        multiple={multiple}
        list={list}
        disabled={disabled}
        onChange={onChange}
        onInput={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        data-testid={id || name}
        aria-label={ariaLabel}
        autoCorrect={autocorrect}
        spellCheck={spellcheck}
        suppressHydrationWarning={suppressHydrationWarning}
      />
      {hint && (
        <p className="hint text-sm font-normal mt-[.5em] dark:text-light peer-invalid:text-warning-dark peer-invalid:dark:text-warning-light inline-block">
          {title}
        </p>
      )}
    </>
  );
});

export default Input;
