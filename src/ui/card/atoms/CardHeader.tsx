import React from 'react'

import { twMerge } from 'tailwind-merge'

import { CardHeaderProps } from '../types'

const CardHeader = ({
	className = '',
	title,
	titlestyles = '',
}: CardHeaderProps) => {
	return (
		<header className={twMerge(`card-header p-0`, className)}>
			<h4 className={twMerge(`card-title font-bold opacity-80 capitalize mb-2`, titlestyles)}>{title}</h4>
		</header>
	)
}

export default CardHeader
