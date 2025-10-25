'use client'

import React from 'react'
import ChartWrap from './ChartWrap'
import { ScatterChartProps } from './types'

const ScatterChart = ({
	data,
	options,
	title,
	legendposition,
	gridColor = '#444444',
	aspect = 'portrait',
	style,
	className,
}: ScatterChartProps) => {
	return (
		<ChartWrap
			data={data}
			options={{
				...options,
				scales: {
					x: {
						...options?.scales?.x,
						grid: {
							...options?.scales?.x?.grid,
							color: gridColor,
						},
					},
					y: {
						...options?.scales?.y,
						grid: {
							...options?.scales?.y?.grid,
							color: gridColor,
						},
					},
				},
			}}
			title={title}
			legendposition={legendposition}
			chartType='scatter'
			aspect={aspect}
			className={className}
			style={style}
		/>
	)
}

export default ScatterChart
