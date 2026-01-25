"use client";

import React, { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { FaSearch } from "react-icons/fa";
import { Input, Button } from "..";
import { SearchInputProps } from "./types";

const SearchInput = ({
  name = "search",
  id = "search",
  className = "",
  label = "Search",
  icon,
  onButtonSubmit,
  size = "md",
  rounded = "md",
  placeholder,
  inputStyles = "",
  btnShape = "circle",
  btnBackground = "dark",
  btnColor = "light",
  autocomplete = "off",
  autocorrect = "off",
  spellcheck = false,
  spacing = "0",
  value = "",
}: SearchInputProps) => {
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (value && value.trim().length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!newValue) {
      onButtonSubmit(newValue);
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const currentValue = inputRef.current?.value?.trim() ?? "";
      onButtonSubmit(currentValue);
    }
  };

  const handleButtonClick = () => {
    const currentValue = inputRef.current?.value?.trim() ?? "";
    onButtonSubmit(currentValue);
  };

  return (
    <div
      className={twMerge(
        `search-box flex font-semi-bold gap-${spacing} text-dark dark:text-light`,
        className,
      )}
      data-testid={name}
    >
      <Input
        ref={inputRef}
        name={name}
        id={id}
        type="search"
        data-testid={`input-${name}`}
        className={twMerge("border-neutral", inputStyles)}
        size={size}
        placeholder={placeholder}
        autocomplete={autocomplete}
        autocorrect={autocorrect}
        spellcheck={spellcheck}
        aria-label="Search"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeydown}
        rounded={rounded}
      />

      <Button
        layout={btnShape}
        size={size}
        btnBackground={btnBackground}
        btnColor={btnColor}
        onClick={handleButtonClick}
        disabled={disabled}
        title="Submit"
        isBold={true}
        className="min-w-[42px]"
      >
        {icon ? <FaSearch /> : label}
        <span className="sr-only">Search</span>
      </Button>
    </div>
  );
};

export default SearchInput;