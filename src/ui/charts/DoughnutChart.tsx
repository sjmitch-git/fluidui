'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { DoughnutChartProps } from './types'

const DoughnutChart = ({
	data,
	options,
	title,
	legendposition,
	border = false,
	aspect = 'portrait',
	style,
	className,
}: DoughnutChartProps) => {
	return (
		<ChartWrap
			data={data}
			options={{
				...(options as any),
				borderWidth: border ? 2 : 0,
			}}
			title={title}
			legendposition={legendposition}
			chartType='doughnut'
			aspect={aspect}
			className={className}
			style={style}
		/>
	)
}

export default DoughnutChart
