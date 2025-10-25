'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { BarChartProps } from './types'

const BarChart = ({
	data,
	options,
	title,
	legendposition,
	aspect = 'portrait',
	style,
	className,
	layout,
	gridColor = '#444444',
}: BarChartProps) => {
	return (
		<ChartWrap
			data={data}
			options={{
				...options,
				indexAxis: layout === 'horizontal' ? 'y' : 'x',
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
			chartType='bar'
			aspect={aspect}
			className={className}
			style={style}
		/>
	)
}

export default BarChart
