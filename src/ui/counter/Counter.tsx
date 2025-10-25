"use client";

import React, { useState, useRef } from "react";

import { twMerge } from "tailwind-merge";

import { FaPlus, FaMinus } from "react-icons/fa6";

import { Input, Button, Label } from "..";

import { CounterProps } from "./types";

const Counter = ({
  name = "counter",
  id = "counter",
  className = "font-semibold",
  min = 0,
  max,
  value = 1,
  step = 1,
  onCountChange,
  btnShape = "circle",
  btnBackground = "info",
  btnColor = "light",
  size = "md",
  spacing = "2",
  label,
  labelIsBold = true,
  layout = "col",
  title,
  hint = false,
  inputStyles = "max-w-[3em] border-neutral border-2",
  rounded = "md",
}: CounterProps) => {
  const [total, setTotal] = useState(value);
  const [error, setError] = useState(false);
  const input = useRef<HTMLInputElement>(null!);

  const handleValueChange = (value: number) => {
    setTotal(value);
    onCountChange(value);
    input.current.valueAsNumber = value;
    ifError(value);
  };

  const plus = () => {
    const value = total + step;
    handleValueChange(value);
  };

  const minus = () => {
    const value = total - step;
    handleValueChange(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    handleValueChange(value);
  };

  const ifError = (value: number) => {
    if (!value || value > max || value < min) setError(true);
    else setError(false);
  };

  return (
    <Label
      label={label}
      isBold={labelIsBold}
      layout={layout}
      forId={id}
      size={size}
      type="number"
      className={twMerge(`counter group`, className)}
      data-testid="counter"
    >
      <div className={`flex items-center gap-${spacing}`}>
        <Button
          disabled={total <= Number(min)}
          onClick={minus}
          aria-label="Minus"
          title="Minus"
          id="minus"
          layout={btnShape}
          size={size}
          btnBackground={btnBackground}
          btnColor={btnColor}
        >
          <FaMinus />
          <span className="sr-only">Minus</span>
        </Button>
        <Input
          name={name}
          id={id}
          type="number"
          max={max}
          min={min}
          value={total}
          ref={input}
          onChange={handleChange}
          data-testid="counter-input"
          className={`!me-0 ${inputStyles}`}
          size={size}
          title={title}
          placeholder={min?.toString()}
          rounded={rounded}
        />
        <Button
          disabled={total >= Number(max)}
          onClick={plus}
          aria-label="Plus"
          title="Plus"
          id="plus"
          layout={btnShape}
          size={size}
          btnBackground={btnBackground}
          btnColor={btnColor}
        >
          <FaPlus />
          <span className="sr-only">Add</span>
        </Button>
      </div>
      {hint && (
        <p
          className={`hint text-sm font-normal mt-[.5em] dark:text-light ${error && "text-error"}`}
        >
          {title}
        </p>
      )}
    </Label>
  );
};

export default Counter;
