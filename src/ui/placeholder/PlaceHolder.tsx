import React, { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

import { PlaceHolderProps } from './types'
import { Spinner } from '..'

const baseUrl = 'https://placehold.co/'

const PlaceHolder = ({
	width = '288',
	height,
	background,
	color,
	text = '',
	format = 'png',
	className,
	style,
}: PlaceHolderProps) => {
	const [src, setSrc] = useState('')

	useEffect(() => {
		let url = `${baseUrl}${width}`
		if (height) url += `x${height}`
		if (background) url += `/${background.replace('#', '')}`
		if (color) url += `/${color.replace('#', '')}`
		url += `/${format}`
		if (text) url += `?text=${encodeURIComponent(text)}`

		setSrc(url)
	}, [width, height, background, color, text, format])

	return (
		<div
			className='bg-gray-200 text-gray-500'
			style={{
				width: `${width}px`,
				height: `${height || width}px`,
			}}
		>
			{src ? (
				<img
					src={src}
					alt={text || 'Placeholder'}
					className={twMerge('img-placeholder', className)}
					style={style}
				/>
			) : (
				<div className='flex items-center justify-center h-full w-full'>
					<Spinner width={60} />
				</div>
			)}
		</div>
	)
}

export default PlaceHolder
