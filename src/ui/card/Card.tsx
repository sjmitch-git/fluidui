import React, { useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { CardProps } from './types'

const shadows = {
	sm: 'shadow-sm shadow-[2px_2px_2px_0_rgba(0,0,0,0.15)] rtl:shadow-[-2px_2px_2px_0_rgba(0,0,0,0.15)] dark:shadow-[2px_2px_2px_0_rgba(255,255,255,0.2)] rtl:dark:shadow-[-2px_2px_2px_0_rgba(255,255,255,0.2)]',
	md: 'shadow-md shadow-[4px_4px_4px_0_rgba(0,0,0,0.15)] rtl:shadow-[-4px_4px_4px_0_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_4px_0_rgba(255,255,255,0.2)] rtl:dark:shadow-[-4px_4px_4px_0_rgba(255,255,255,0.2)]',
	lg: 'shadow-lg shadow-[6px_6px_6px_0_rgba(0,0,0,0.15)] rtl:shadow-[-6px_6px_10px_6px_rgba(0,0,0,0.15)] dark:shadow-[6px_6px_6px_0_rgba(255,255,255,0.2)] rtl:dark:shadow-[-6px_6px_6px_0_rgba(255,255,255,0.2)]',
	xl: 'shadow-xl shadow-[8px_8px_8px_0_rgba(0,0,0,0.15)] rtl:shadow-[-8px_8px_8px_0_rgba(0,0,0,0.15)] dark:shadow-[8px_8px_8px_0_rgba(255,255,255,0.2)] rtl:dark:shadow-[-8px_8px_8px_0_rgba(255,255,255,0.2)]',
	none: 'shadow-none',
}

const layouts = {
	col: 'col flex flex-col',
	col_reverse: 'col flex flex-col-reverse',
	row: 'row grid grid-cols-4',
}

const roundeds = {
	none: '',
	sm: 'rounded-sm overflow-hidden',
	md: 'rounded-md overflow-hidden',
	lg: 'rounded-lg overflow-hidden',
	xl: 'rounded-xl overflow-hidden',
}

const Card = ({
	className = '',
	style,
	shadow = 'none',
	children,
	layout = 'col',
	rounded = 'none',
	outline = true,
}: CardProps) => {
	const layoutClasses = useMemo(() => layouts[layout], [layout])
	const shadowClasses = useMemo(() => (shadow ? `${shadows[shadow]}` : ''), [shadow])
	const roundedClasses = useMemo(() => roundeds[rounded], [rounded])
	const outlineClasses = useMemo(
		() => (outline ? 'border border-dark/[.20] dark:border-light/[.20]' : ''),
		[outline]
	)

	return (
		<div
			className={twMerge(
				`card group relative bg-light text-dark dark:bg-dark dark:text-light ${shadowClasses} ${layoutClasses} ${roundedClasses} ${outlineClasses}`,
				className
			)}
			style={style}
			data-testid='card'
		>
			{children}
		</div>
	)
}

export default Card
