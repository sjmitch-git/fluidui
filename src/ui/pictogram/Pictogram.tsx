import React, { useMemo } from "react";
import { PictogramProps } from "./types";
import { twMerge } from "tailwind-merge";

const captionSideClasses = {
  top: "caption-top",
  bottom: "caption-bottom",
};

const sizes = {
  md: "text-base",
  lg: "text-lg",
  xl: "text-2xl",
};

const Pictogram = ({
  labels,
  tally,
  icon = "●",
  size = "md",
  caption,
  captionSide = "top",
  className,
  style,
}: PictogramProps) => {
  const sizeClasses = useMemo(() => sizes[size], [size]);

  return (
    <table className={twMerge(`pictogram table ${sizeClasses}`, className)} style={style}>
      {caption ? (
        <caption
          className={`${captionSideClasses[captionSide]} ${
            captionSide === "top" ? "pb-2" : "pt-2"
          } px-2 whitespace-nowrap font-semibold`}
        >
          {caption}
        </caption>
      ) : null}
      <tbody>
        {labels.map((label, index) => (
          <tr key={index}>
            <th className="font-semibold text-left p-2">{label}</th>
            <td className="p-2">
              {tally[index] > 0
                ? Array.from({ length: tally[index] }, (_, i) => (
                    <span key={i} className="inline-block">
                      {icon}
                    </span>
                  ))
                : "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Pictogram;
