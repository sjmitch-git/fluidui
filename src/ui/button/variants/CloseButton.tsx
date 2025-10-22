import React, { useMemo } from 'react'
import Button from '../Button'
import { CloseButtonProps } from './types'
import { HiMiniXMark } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'

const sizes = {
	sm: 'w-',
	md: 'w-6',
	lg: 'w-8',
	xl: 'w-12',
}

const CloseButton = ({
	size = 'md',
	className = '',
	onClick,
	disabled = false,
	layout = 'circle',
	title = 'Close?',
	hoverScale = true,
}: CloseButtonProps) => {
	const sizeClasses = useMemo(() => sizes[size], [size])

	return (
		<Button
			className={twMerge(
				`closebtn fixed p-0 right-4 top-4 bg-dark text-light dark:bg-light dark:text-dark ${sizeClasses}`,
				className
			)}
			onClick={onClick}
			btnBackground='transparent'
			btnColor='current'
			layout={layout}
			size={size}
			title={title}
			disabled={disabled}
			hoverScale={hoverScale}
			id='close'
		>
			<HiMiniXMark className={`h-auto w-full`} />
			<span className='sr-only'>Close</span>
		</Button>
	)
}

export default CloseButton
