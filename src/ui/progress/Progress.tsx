'use client'

import React, { useEffect, useState } from 'react'
import { ProgressProps } from './types'
import { twMerge } from 'tailwind-merge'

const Progress = ({
	totalSize,
	downloadedSize = 0,
	unit = 'mb',
	id = 'progress',
	onDone,
	feedbackClasses = '',
	className = '',
	style,
}: ProgressProps) => {
	const [progress, setProgress] = useState(0)
	const [done, setDone] = useState(false)

	useEffect(() => {
		if (totalSize > 0) {
			const percentage = (downloadedSize / totalSize) * 100
			setProgress(Math.min(percentage, 100))
		}

		if (downloadedSize >= totalSize) {
			setDone(true)
			if (onDone && !done) onDone()
		} else {
			setDone(false)
		}
	}, [totalSize, downloadedSize, onDone, done])

	return (
		<div className='progress-wrapper min-w-60'>
			<progress
				className={twMerge(`progress w-full h-4`, className)}
				style={style}
				id={id}
				value={progress}
				max={100}
			>
				{progress.toFixed(2)}%
			</progress>
			<div className={twMerge(`progress-feedback text-sm text-center mt-2`, feedbackClasses)}>
				{progress.toFixed(0)}% / {totalSize} {unit}
			</div>
		</div>
	)
}

export default Progress
