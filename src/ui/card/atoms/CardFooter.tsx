import React from 'react'

import Link from 'next/link'

import { twMerge } from 'tailwind-merge'

import { CardFooterProps } from '../types'

const CardFooter = ({ className = '', link, linkLabel, children }: CardFooterProps) => {
	return (
		<div className={twMerge(`card-footer flex px-2 pt-4 items-center mt-auto`, className)}>
			{children}
			{link && (
				<Link
					href={link}
					className='uppercase ms-auto before:absolute before:content-["_"] before:top-0 before:right-0 before:bottom-0 before:left-0 z-10 text-ellipsis overflow-hidden whitespace-nowrap'
					target={link.startsWith('https://') ? '_blank' : '_self'}
				>
					{linkLabel}
				</Link>
			)}
		</div>
	)
}

export default CardFooter
