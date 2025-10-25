import React from 'react'

import { twMerge } from 'tailwind-merge'

import { Figure } from '..'
import { GalleryProps } from './types'

const getCaption = (name: string, caption: boolean): string => {
	return caption ? name : ''
}

const Gallery = ({ className = '', aspect, data, caption = true, style }: GalleryProps) => {
	return (
		<div
			className={twMerge(
				`gallery group min-w-full grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-6`,
				className
			)}
			style={style}
		>
			{data.map((item, index) => (
				<Figure
					src={item.src}
					alt={item.name}
					caption={getCaption(item.name, caption)}
					key={index}
					aspect={aspect}
				/>
			))}
		</div>
	)
}

export default Gallery
