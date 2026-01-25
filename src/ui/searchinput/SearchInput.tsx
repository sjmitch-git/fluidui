"use client";

import React, { useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null!);

  const isDisabled = value.trim() === "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!newValue) onButtonSubmit(newValue);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const currentValue = inputRef.current?.value?.trim() ?? "";
      onButtonSubmit(currentValue);
    }
  };

  const handleButtonClick = () => {
    const trimmed = value.trim();
    onButtonSubmit(trimmed);
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
        disabled={isDisabled}
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