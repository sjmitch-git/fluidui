'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { RadarChartProps } from './types'

const RadarChart = ({
	data,
	options,
	title,
	legendposition,
	gridColor = '#444444',
	aspect = 'square',
	style,
	className,
}: RadarChartProps) => {
	return (
		<ChartWrap
			data={data}
			options={{
				...options,
				scales: {
					r: {
						...options?.scales?.r,
						grid: {
							...options?.scales?.r?.grid,
							color: gridColor,
						},
					},
				},
			}}
			title={title}
			legendposition={legendposition}
			chartType='radar'
			aspect={aspect}
			className={className}
			style={style}
		/>
	)
}

export default RadarChart
