"use client";

import React, { useState, useEffect, useMemo } from "react";

import { twMerge } from "tailwind-merge";

import { roundUp } from "@smitch/js-lib";

import {
  HiChevronRight,
  HiChevronLeft,
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
} from "react-icons/hi";
import { ButtonGroup, Select, Button } from "..";
import { PaginationProps } from "./types";

const sizes = {
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const Pagination = ({
  page = "1",
  feedback = true,
  feedbackLabel = "Page",
  feedbackSeparator = "of",
  firstPageLabel = "First Page",
  lastPageLabel = "Last Page",
  prevPageLabel = "Previous Page",
  nextPageLabel = "Next Page",
  range,
  results,
  size = "md",
  layout = "horizontal",
  gap = "none",
  rounded = true,
  icons = true,
  minimal = false,
  btnBackground,
  btnColor,
  btnShape = "default",
  onChange,
  className = "",
  style,
}: PaginationProps) => {
  const [selectValue, setSelectValue] = useState(page);

  useEffect(() => {
    setSelectValue(page);
  }, [page]);

  const sizeClasses = useMemo(() => sizes[size], [size]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void =>
    onChange(e.currentTarget.value);

  const handleOnClick = (page: string) => onChange(page);

  const totalPages = useMemo(() => {
    return roundUp(results / range);
  }, [results, range]);

  const options = useMemo(() => {
    return [...new Array(totalPages)].map((_el, index) => (index + 1).toString());
  }, [totalPages]);

  return (
    <nav
      className={twMerge(
        `pagination group flex flex-col items-center justify-center gap-1 `,
        className
      )}
      style={style}
      aria-label="pagination"
    >
      <ButtonGroup
        className={`pagination-buttons mb-1 ${btnShape === "circle" ? "items-center" : ""}`}
        layout={layout}
        rounded={rounded}
        gap={gap}
      >
        <Button
          className={`${minimal ? "hidden" : ""}`}
          title={firstPageLabel}
          onClick={() => handleOnClick("1")}
          disabled={page === "1"}
          size={size}
          btnBackground={btnBackground}
          btnColor={btnColor}
          layout={btnShape}
        >
          {icons ? (
            <>
              <HiChevronDoubleLeft className="mx-auto" />
              <span className="sr-only">{firstPageLabel}</span>
            </>
          ) : (
            "First"
          )}
        </Button>
        <Button
          title={prevPageLabel}
          onClick={() => handleOnClick(`${Number(selectValue) - 1}`)}
          disabled={Number(selectValue) === 1}
          size={size}
          btnBackground={btnBackground}
          btnColor={btnColor}
          layout={btnShape}
        >
          {icons ? (
            <>
              <HiChevronLeft className="mx-auto" />
              <span className="sr-only">{prevPageLabel}</span>
            </>
          ) : (
            "Prev"
          )}
        </Button>
        <Select
          dropdownSize={size}
          className={`${size} border-gray-200 dark:border-gray-700 min-w-16 w-full text-center bg-light text-dark dark:bg-black dark:text-light`}
          defaultValue={selectValue}
          onChange={handleChange}
          nocaret={true}
          options={options}
          rounded="none"
        />
        <Button
          title={nextPageLabel}
          onClick={() => handleOnClick(`${Number(selectValue) + 1}`)}
          disabled={Number(selectValue) === totalPages}
          size={size}
          btnBackground={btnBackground}
          btnColor={btnColor}
          layout={btnShape}
        >
          {icons ? (
            <>
              <HiChevronRight className="mx-auto" />
              <span className="sr-only">{nextPageLabel}</span>
            </>
          ) : (
            "Next"
          )}
        </Button>
        <Button
          className={`${minimal ? "hidden" : ""}`}
          title={lastPageLabel}
          onClick={() => handleOnClick(totalPages.toString())}
          disabled={Number(selectValue) === totalPages}
          size={size}
          btnBackground={btnBackground}
          btnColor={btnColor}
          layout={btnShape}
        >
          {icons ? (
            <>
              <HiChevronDoubleRight className="mx-auto" />
              <span className="sr-only">{lastPageLabel}</span>
            </>
          ) : (
            "Last"
          )}
        </Button>
      </ButtonGroup>
      {feedback ? (
        <div className={`feedback mt-1 ${sizeClasses}`}>
          {feedbackLabel} {selectValue} {feedbackSeparator} {totalPages}
        </div>
      ) : null}
    </nav>
  );
};

export default Pagination;
