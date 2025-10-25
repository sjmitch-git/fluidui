import React from 'react'

import { twMerge } from 'tailwind-merge'

import { CardBodyProps } from '../types'

const CardBody = ({ className = '', children }: CardBodyProps) => {
	return (
		<div
			className={twMerge(
				`card-body h-full relative flex flex-col p-2 group-[.row]:col-span-4 group-[.row]:peer-[.card-image]:col-span-3`,
				className
			)}
		>
			{children}
		</div>
	)
}

export default CardBody
