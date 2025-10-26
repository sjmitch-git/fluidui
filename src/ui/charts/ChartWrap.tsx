import React, { useMemo, Suspense, lazy } from "react";
import { merge } from "../@utils/merge";
import { Chart as ChartJS, registerables } from "chart.js";
import { twMerge } from "tailwind-merge";
import { ChartDataMap, ChartOptionsMap } from "./types";

const LazyBubble = lazy(() =>
  import("react-chartjs-2").then((module) => ({ default: module.Bubble }))
);
const LazyLine = lazy(() => import("react-chartjs-2").then((module) => ({ default: module.Line })));
const LazyBar = lazy(() => import("react-chartjs-2").then((module) => ({ default: module.Bar })));
const LazyPie = lazy(() => import("react-chartjs-2").then((module) => ({ default: module.Pie })));
const LazyDoughnut = lazy(() =>
  import("react-chartjs-2").then((module) => ({ default: module.Doughnut }))
);
const LazyRadar = lazy(() =>
  import("react-chartjs-2").then((module) => ({ default: module.Radar }))
);
const LazyPolarArea = lazy(() =>
  import("react-chartjs-2").then((module) => ({ default: module.PolarArea }))
);
const LazyScatter = lazy(() =>
  import("react-chartjs-2").then((module) => ({ default: module.Scatter }))
);

ChartJS.register(...registerables);

type ChartTypes = keyof ChartDataMap;

interface ChartWrapProps<T extends ChartTypes> {
  title?: string;
  legendposition?: string;
  data: ChartDataMap[T];
  options?: ChartOptionsMap[T];
  chartType: T;
  className?: string;
  style?: React.CSSProperties;
  aspect?: "landscape" | "portrait" | "square" | "auto";
}

const aspects = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  auto: "aspect-auto",
};

const ChartWrap = <T extends ChartTypes>({
  data,
  options,
  title,
  legendposition,
  chartType,
  aspect = "auto",
  className,
  style,
}: ChartWrapProps<T>) => {
  const aspectClasses = useMemo(() => aspects[aspect], [aspect]);

  const defaultOptions = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: legendposition,
        },
        title: {
          display: !!title,
          text: title,
        },
      },
    };
  }, [legendposition, title]);

  const chartComponents: Record<ChartTypes, React.ElementType> = {
    bubble: LazyBubble,
    line: LazyLine,
    bar: LazyBar,
    pie: LazyPie,
    doughnut: LazyDoughnut,
    radar: LazyRadar,
    polarArea: LazyPolarArea,
    scatter: LazyScatter,
    mixed: LazyBar,
  };

  const ChartComponent = chartComponents[chartType] as React.ElementType;

  const combinedOptions = useMemo<ChartOptionsMap[T]>(() => {
    if (options) return merge(defaultOptions, options) as ChartOptionsMap[T];
    return defaultOptions as ChartOptionsMap[T];
  }, [defaultOptions, options]);

  return (
    <figure className={twMerge(`chart-wrap h-auto min-w-full ${aspectClasses}`, className)}>
      <Suspense fallback={<div className="text-center text-sm italic">Loading Chart</div>}>
        <ChartComponent
          data={data}
          options={combinedOptions as unknown as any}
          title={title}
          legendposition={legendposition}
          style={style}
        />
      </Suspense>
    </figure>
  );
};

export default ChartWrap;
