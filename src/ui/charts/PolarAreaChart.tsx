'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { PolarAreaChartProps } from './types'

const PolarAreaChart = ({
	data,
	options,
	title,
	legendposition,
	gridColor = '#444444',
	aspect = 'portrait',
	style,
	className,
}: PolarAreaChartProps) => {
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
			chartType='polarArea'
			aspect={aspect}
			className={className}
			style={style}
		/>
	)
}

export default PolarAreaChart
