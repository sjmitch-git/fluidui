"use client";

import Link from "next/link";
import React, { useState, useMemo } from "react";

import { twMerge } from "tailwind-merge";

import { Button } from "..";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import { DropdownProps, LinksProps } from "./types";

const sizes = {
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

const showrapClasses = "min-w-[100px]";

const Dropdown = ({
  size = "md",
  className = "",
  style,
  links,
  buttonLayout = "circle",
  buttonBackground = "transparent",
  buttonColor = "current",
}: DropdownProps) => {
  const [show, setShow] = useState("");

  const sizeClasses = useMemo(() => sizes[size], [size]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, label: string) => {
    e.preventDefault();
    e.stopPropagation();
    label === show ? closeNav() : openNav(label);
  };

  const handleBlur = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeNav();
  };

  const openNav = (label: string) => {
    setTimeout(() => {
      setShow(label);
    }, 0);
  };

  const closeNav = () => {
    setTimeout(() => {
      setShow("");
    }, 0);
  };

  return (
    <div
      className={twMerge(`dropdown group inline-block relative ${sizeClasses}`, className)}
      style={style}
    >
      <ul className="dropdown-list flex flex-col gap-4 md:flex-row;">
        {links.map((link) => (
          <li
            key={link.label}
            className={`flex flex-wrap items-center group whitespace-nowrap ${
              show === link.label ? "show" : ""
            }`}
          >
            <Link
              href={link.href}
              onClick={closeNav}
              className="dropdown-link flex flex-row items-center gap-2 no-underline hover:!text-current"
            >
              {link.label}{" "}
              {link.links && (
                <Button
                  className={`menu-btn !p-1`}
                  onClick={(e) => handleClick(e, link.label)}
                  onBlur={(e) => handleBlur(e)}
                  title="Toggle Menu"
                  btnBackground={buttonBackground}
                  btnColor={buttonColor}
                  size={size}
                  layout={buttonLayout}
                >
                  {show === link.label ? <HiChevronUp /> : <HiChevronDown />}
                  <span className="sr-only">Toggle dropdown menu</span>
                </Button>
              )}
            </Link>
            {link.links && (
              <div className="absolute left-0 -bottom-2 w-full">
                <div
                  className={`wrap absolute -right-4 -left-4 top-full z-50 overflow-x-hidden text-base leading-7 ${
                    show ? showrapClasses : "max-h-0"
                  }`}
                >
                  <ul className="ms-0 block w-full border bg-dark text-light dark:bg-light dark:text-dark p-4">
                    {link.links.map((sub) => (
                      <li key={sub.label}>
                        <Link href={sub.href} key={sub.label} className="">
                          {sub.label}
                        </Link>

                        {sub.links && (
                          <ul>
                            {sub.links.map((subsub: LinksProps) => (
                              <li key={subsub.label} className="indent-2">
                                <Link href={subsub.href} className="">
                                  {subsub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
