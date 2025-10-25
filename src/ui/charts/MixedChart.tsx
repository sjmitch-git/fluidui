'use client'

import React from 'react'
import ChartWrap from './ChartWrap'
import { MixedChartProps } from './types'

const MixedChart = ({
	data,
	options,
	title,
	legendposition,
	gridColor = '#444444',
	aspect = 'portrait',
	style,
	className,
}: MixedChartProps) => {
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
						...options?.scales?.x,
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

export default MixedChart
