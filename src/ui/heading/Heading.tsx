import React from 'react'

import { twMerge } from 'tailwind-merge'

import { HeadingProps } from './types'

const headingStyles = {
	1: 'h1 text-4xl md:text-5xl lg:text-6xl',
	2: 'h2 text-3xl md:text-4xl lg:text-5xl',
	3: 'h3 text-2xl md:text-3xl lg:text-4xl',
	4: 'h4 text-xl md:text-2xl lg:text-3xl',
	5: 'h5 text-lg md:text-xl lg:text-2xl',
	6: 'h6 text-base md:text-lg lg:text-xl',
}

const headingWeights = {
	bold: 'font-bold opacity-95',
	semibold: 'font-semibold opacity-95',
	medium: 'font-medium',
	normal: 'font-normal',
	light: 'font-light',
}

const headingCase = {
	normal: 'normal-case',
	capitalize: 'capitalize',
	uppercase: 'uppercase',
	lowercase: 'lowercase',
}

const Heading = ({
	level = 1,
	weight = 'semibold',
	align = 'left',
	transform = 'normal',
	children,
	className = '',
}: HeadingProps) => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements

	return (
		<Tag
			className={twMerge(
				`${headingStyles[level]} ${headingWeights[weight]} text-${align} ${headingCase[transform]} mb-[.5em]`,
				className
			)}
			role='heading'
		>
			{children}
		</Tag>
	)
}

export default Heading
