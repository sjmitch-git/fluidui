'use client'

import React from 'react'
import ChartWrap from './ChartWrap'
import { BubbleChartProps } from './types'

const BubbleChart = ({
	data,
	options,
	title,
	legendposition,
	gridColor = '#444444',
	aspect = 'portrait',
	style,
	className,
}: BubbleChartProps) => {
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
			chartType='bubble'
			aspect={aspect}
			className={className}
			style={style}
		/>
	)
}

export default BubbleChart
