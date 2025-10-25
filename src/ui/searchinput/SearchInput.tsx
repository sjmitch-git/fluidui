"use client";

import React, { useState, useRef } from "react";

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
}: SearchInputProps) => {
  const [disabled, setDisabled] = useState(true);
  const input = useRef<HTMLInputElement>(null!);

  const handleClick = () => {
    const value = input.current.value;
    onButtonSubmit(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    value ? setDisabled(false) : setDisabled(true);
  };

  return (
    <div
      className={twMerge(
        `search-box flex font-semi-bold gap-${spacing} text-dark dark:text-light`,
        className
      )}
      data-testid={name}
    >
      <Input
        name={name}
        id={id}
        type="search"
        ref={input}
        data-testid={`input-${name}`}
        className={twMerge(`border-neutral`, inputStyles)}
        size={size}
        placeholder={placeholder}
        autocomplete={autocomplete}
        autocorrect={autocorrect}
        spellcheck={spellcheck}
        aria-label="Search"
        onChange={handleChange}
        rounded={rounded}
      />
      <Button
        layout={btnShape}
        size={size}
        btnBackground={btnBackground}
        btnColor={btnColor}
        onClick={handleClick}
        disabled={disabled}
        title="Submit"
        isBold={true}
      >
        {icon ? <FaSearch /> : label}
        <span className="sr-only">Search</span>
      </Button>
    </div>
  );
};

export default SearchInput;
