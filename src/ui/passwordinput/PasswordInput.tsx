"use client";

import React, { useState } from "react";

import { twMerge } from "tailwind-merge";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Input, Button, Label } from "..";

import { PasswordInputProps } from "./types";

const PasswordInput = ({
  name = "password",
  className = "",
  label = "Password",
  size = "md",
  rounded = "md",
  placeholder,
  autocomplete,
  pattern,
  inputStyles,
  hint = true,
  title,
  required = true,
  layout = "col",
  onInputChange,
}: PasswordInputProps) => {
  const [type, setType] = useState<"password" | "text">("password");

  const toggleType = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onInputChange) return;
    const value = e.target.value;
    onInputChange(value);
  };

  return (
    <Label
      label={label}
      className={twMerge(`label-pwd group`, className)}
      size={size}
      required={required}
      layout={layout}
    >
      <Input
        name={name}
        id={name}
        type={type}
        pattern={pattern}
        data-testid={`input-${name}`}
        className={`password ${inputStyles}`}
        size={size}
        placeholder={placeholder}
        autocomplete={autocomplete}
        rounded={rounded}
        title={title}
        hint={hint}
        required={required}
        onChange={handleChange}
      />
      <Button
        onClick={toggleType}
        className="absolute right-2 top-4 !p-0"
        size={size}
        layout="circle"
        btnBackground="transparent"
        btnColor="info"
        title="Toggle password visiblity"
      >
        {type !== "password" ? <FaEye /> : <FaEyeSlash />}
      </Button>
    </Label>
  );
};

export default PasswordInput;
