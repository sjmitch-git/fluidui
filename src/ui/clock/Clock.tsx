import React, { useState, useEffect } from "react";
import { ClockProps } from "./types";
import { twMerge } from "tailwind-merge";

const layouts = {
  column: "flex-col items-center",
  "column-reverse": "flex-col-reverse items-center",
  row: "flex-row items-center gap-2",
  "row-reverse": "flex-row-reverse items-center gap-2",
};

const labelsizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const Clock = ({
  timezone = "UTC",
  size = 120,
  showSeconds = false,
  ticks = false,
  theme,
  layout = "column",
  showLabel = true,
  clockFaceStroke = 4,
  labelSize = "md",
  className = "",
}: ClockProps) => {
  const [time, setTime] = useState(new Date());
  const [city, setCity] = useState("");

  useEffect(() => {
    if (!timezone) setCity("");
    else {
      const parts = timezone.split("/");
      if (parts.length > 1) {
        setCity(parts[1].replace(/_/g, " "));
      } else {
        setCity(timezone);
      }
    }
  }, [timezone]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const layoutClass = layouts[layout] || "flex-col";
  const labelClass = labelsizes[labelSize] || "text-base";

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let label = "";

  if (timezone) {
    const parts = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: timezone,
      timeZoneName: "short",
    })
      .formatToParts(time)
      .reduce((acc, part) => {
        if (part.type === "hour") acc.hour = parseInt(part.value, 10);
        if (part.type === "minute") acc.minute = parseInt(part.value, 10);
        if (part.type === "second") acc.second = parseInt(part.value, 10);
        if (part.type === "timeZoneName") acc.label = part.value;
        return acc;
      }, {} as { hour: number; minute: number; second: number; label: string });

    hours = parts.hour;
    minutes = parts.minute;
    seconds = parts.second;
    label = parts.label;
  } else {
    label =
      Intl.DateTimeFormat(undefined, { timeZoneName: "short" })
        .formatToParts(time)
        .find((part) => part.type === "timeZoneName")?.value || "";
  }

  const hourAngle = ((hours % 12) + minutes / 60) * 30;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const secondAngle = seconds * 6;

  const ariaTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: showSeconds ? "2-digit" : undefined,
    hour12: false,
    timeZone: timezone,
  });

  return (
    <div
      data-testid="clock"
      aria-label={`Analog clock showing ${ariaTime} in ${city || label}`}
      className={twMerge(`clock flex group ${layoutClass} space-y-4`, className)}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="clock_face"
      >
        <circle
          cx={60}
          cy={60}
          r={55}
          fill={theme === "dark" ? "#222" : "#fff"}
          stroke={theme === "dark" ? "#fff" : "#222"}
          strokeWidth={clockFaceStroke}
        />
        {/* Hour tick marks */}
        {ticks &&
          Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30 * (Math.PI / 180);
            const x1 = 60 + 48 * Math.sin(angle);
            const y1 = 60 - 48 * Math.cos(angle);
            const x2 = 60 + 54 * Math.sin(angle);
            const y2 = 60 - 54 * Math.cos(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={theme === "dark" ? "#fff" : "#222"}
                strokeWidth={3}
                strokeLinecap="round"
              />
            );
          })}
        {/* Second hand (optional) */}
        {showSeconds && (
          <line
            x1={60}
            y1={60}
            x2={60 + 45 * Math.sin((Math.PI / 180) * secondAngle)}
            y2={60 - 45 * Math.cos((Math.PI / 180) * secondAngle)}
            stroke={theme === "dark" ? "#fff" : "#222"}
            strokeWidth={2}
            strokeLinecap="round"
            opacity={0.5}
          />
        )}

        {/* Minute hand */}
        <line
          x1={60}
          y1={60}
          x2={60 + 40 * Math.sin((Math.PI / 180) * minuteAngle)}
          y2={60 - 40 * Math.cos((Math.PI / 180) * minuteAngle)}
          stroke={theme === "dark" ? "#fff" : "#222"}
          strokeWidth={3}
          strokeLinecap="round"
        />

        {/* Hour hand */}
        <line
          x1={60}
          y1={60}
          x2={60 + 25 * Math.sin((Math.PI / 180) * hourAngle)}
          y2={60 - 25 * Math.cos((Math.PI / 180) * hourAngle)}
          stroke={theme === "dark" ? "#fff" : "#222"}
          strokeWidth={5}
          strokeLinecap="round"
        />

        {/* Center dot */}
        <circle cx={60} cy={60} r={4} fill={theme === "dark" ? "#fff" : "#222"} />
      </svg>
      {showLabel && <div className={`clock_label ${labelClass}`}>{city || label || timezone}</div>}
    </div>
  );
};

export default Clock;
