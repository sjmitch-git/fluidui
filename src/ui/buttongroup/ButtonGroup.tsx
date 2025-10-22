import React, { useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { ButtonGroupProps } from './types'

const layouts = {
	horizontal: 'flex-row',
	vertical: 'flex-col text-start',
}

const outlines = {
	none: '',
	thin: 'border-2',
	thick: 'border-4',
}

const gapSpacing = {
	none: 'gap-0',
	sm: 'gap-1',
	md: 'gap-2',
	lg: 'gap-3',
	xl: 'gap-4',
}

const outlineColors = {
	none: 'border-transparent',
	light: 'border-light',
	dark: 'border-dark',
	grey: 'border-neutral',
}

const ButtonGroup = ({
	className = '',
	label = 'Button group',
	layout = 'horizontal',
	rounded = true,
	children,
	outline,
	outlineColor = 'light',
	gap = 'none',
}: ButtonGroupProps) => {
	const layoutClasses = useMemo(() => layouts[layout], [layout])
	const outlineClasses = useMemo(() => (outline ? outlines[outline] : ''), [outline])
	const outlineColorClasses = useMemo(
		() => (outline ? outlineColors[outlineColor] : ''),
		[outline, outlineColor]
	)
	const gapClasses = useMemo(() => gapSpacing[gap], [gap])
	return (
		<div
			className={twMerge(
				`buttongroup group inline-flex overflow-hidden ${layoutClasses} ${outlineClasses} ${outlineColorClasses} ${gapClasses} ${
					rounded ? 'rounded-md' : 'rounded-none'
				}`,
				className
			)}
			role='group'
			aria-label={label}
			data-testid='buttongroup'
		>
			{children}
		</div>
	)
}

export default ButtonGroup
