'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { PieChartProps } from './types'

const PieChart = ({
	data,
	options,
	title,
	legendposition,
	border = false,
	aspect = 'portrait',
	style,
	className,
}: PieChartProps) => {
	return (
		<ChartWrap
			data={data}
			options={{
				...(options as any),
				borderWidth: border ? 2 : 0,
			}}
			title={title}
			legendposition={legendposition}
			chartType='pie'
			aspect={aspect}
			className={className}
			style={style}
		/>
	)
}

export default PieChart
