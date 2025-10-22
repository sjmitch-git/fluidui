import React from 'react'

import { twMerge } from 'tailwind-merge'

import { round } from '@smitch/js-lib'
import { Badge } from '..'

import {
	FaStar,
	FaThumbsUp,
	FaFaceSmile,
	FaHeart,
	FaCheck,
	FaThumbsDown,
	FaFaceFrown,
} from 'react-icons/fa6'

import { RatingsProps } from './types'

const Ratings = ({
	className = '',
	rating,
	range,
	icon = 'star',
	customIcon,
	spacing = '0',
	shape = 'circle',
	size = 'md',
	ratingsBackground = 'info',
	ratingsColor = 'dark',
}: RatingsProps) => {
	rating = round(rating)
	if (rating === 0) rating = 1
	if (!range) range = rating
	return (
		<div className='ratings-wrapper inline-block'>
			<div
				className={twMerge(`ratings group relative flex gap-${spacing}`, className)}
				title={`Rating: ${rating} out of ${range}`}
			>
				{[...new Array(range)].map((_el, index) => (
					<Badge
						layout={shape}
						size={size}
						badgeBackground={ratingsBackground}
						badgeColor={ratingsColor}
						key={index}
						className={`static ${rating <= index ? 'grayscale' : ''}`}
					>
						{customIcon ? (
							customIcon
						) : icon === 'smiley' ? (
							<FaFaceSmile />
						) : icon === 'frown' ? (
							<FaFaceFrown />
						) : icon === 'thumb' ? (
							<FaThumbsUp />
						) : icon === 'thumbdown' ? (
							<FaThumbsDown />
						) : icon === 'heart' ? (
							<FaHeart />
						) : icon === 'check' ? (
							<FaCheck />
						) : (
							<FaStar />
						)}
					</Badge>
				))}
			</div>
			<p className='sr-only'>{`Rating: ${rating}/${range}`}</p>
		</div>
	)
}

export default Ratings
