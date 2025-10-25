import React from 'react'
import { round } from '@smitch/js-lib'

import { twMerge } from 'tailwind-merge'

import { StatBarProps } from './types'
import { Heading } from '..'

const StatBar = ({
	title,
	titleAlign = 'center',
	titleSize = 4,
	titleWeight = 'semibold',
	labels,
	showLabels = true,
	data,
	colors = ['rgb(255, 219, 40)', 'rgb(20, 20, 20)'],
	className,
	style,
}: StatBarProps) => {
	const total = data[0] + data[1]
	const percentage1 = total === 0 ? 50 : (data[0] / total) * 100

	return (
		<div
			className={twMerge(`statbar`, className)}
			style={style}
		>
			{showLabels ? (
				<div className='statbar-labels flex justify-center gap-4 mb-2'>
					<div className='flex gap-2 items-center'>
						{labels[0]}{' '}
						<div
							className={`aspect-square w-4`}
							style={{ backgroundColor: colors[0] }}
						></div>
					</div>
					<div className='flex gap-2 items-center'>
						<div
							className={`aspect-square w-4`}
							style={{ backgroundColor: colors[1] }}
						></div>
						{labels[1]}
					</div>
				</div>
			) : null}

			{title ? (
				<Heading
					level={titleSize}
					align={titleAlign}
					weight={titleWeight}
					className='mb-2'
				>
					{title}
				</Heading>
			) : null}

			<div className='grid grid-cols-12 gap-1'>
				<div className='text-center'>{round(data[0])}</div>
				<div className='col-span-10'>
					<progress
						value={percentage1}
						max={100}
						className={`w-full h-6 appearance-none`}
						style={
							{
								'--progress-bar-bg': colors[1],
								'--progress-value-bg': colors[0],
							} as React.CSSProperties
						}
					/>
				</div>
				<div className='text-center'>{round(data[1])}</div>
			</div>

			<style>
				{`
                    progress::-webkit-progress-bar {
                        background-color: var(--progress-bar-bg);
                    }
                    progress::-webkit-progress-value {
                        background-color: var(--progress-value-bg);
                    }
                    progress::-moz-progress-bar {
                        background-color: var(--progress-value-bg);
                    }
                `}
			</style>
		</div>
	)
}

export default StatBar
