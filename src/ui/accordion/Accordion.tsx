'use client'

import React, { useState, useEffect, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { AccordionHead, AccordionCard } from './atoms'

import { AccordionProps } from './types'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
}

const layouts = {
	default: 'mb-0 border border-t-0 first:border-t',
	flush: 'border border-x-0 border-t-0 last:border-b-0',
	spaced: 'mb-2 border',
}

const Accordion = ({
	className = '',
	style,
	size = 'md',
	data,
	opened,
	layout = 'default',
	icon = 'symbol',
	iconPosition = 'right',
	children,
}: AccordionProps) => {
	const [open, setOpen] = useState<string>('')

	useEffect(() => {
		if (opened) setOpen(opened)
	}, [opened])

	const sizeClasses = useMemo(() => sizes[size], [size])
	const layoutClasses = useMemo(() => layouts[layout], [layout])

	return (
		<div
			className={twMerge(`accordion group ${sizeClasses}`, className)}
			style={style}
			data-testid='accordion'
		>
			{data ? (
				data.map((item) => (
					<div
						className={`accordion-wrapper ${layoutClasses} bg-light text-dark dark:bg-dark dark:text-light border-neutral`}
						key={item.id}
					>
						<AccordionHead
							id={item.id}
							name={item.name}
							title={item.title}
							icon={icon}
							iconPosition={iconPosition}
							layout={layout}
							open={open}
							setopen={setOpen}
						/>

						<AccordionCard
							title={item.title || item.name}
							src={item.src}
							description={item.description}
							link={item.link}
						/>
					</div>
				))
			) : (
				<div className='accordion-children'>{children}</div>
			)}
		</div>
	)
}

export default Accordion
