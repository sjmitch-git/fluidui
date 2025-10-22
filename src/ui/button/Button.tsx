import React, { useMemo } from 'react'
import { forwardRef } from 'react'

import { twMerge } from 'tailwind-merge'

import { ButtonProps } from './types'

export type ButtonRef = HTMLButtonElement

const stateStyles = 'disabled:grayscale disabled:opacity-50'

const sizes = {
	sm: 'text-[.8em] border-[.15em]',
	md: 'text-[1em] border-[.15em]',
	lg: 'text-[1.5em] border-[.15em]',
	xl: 'text-[1.75em] border-[.15em]',
}

const layouts = {
	default: '',
	rounded: 'rounded-md',
	pill: 'rounded-full',
	square: 'aspect-square',
	circle: 'aspect-square rounded-full',
}

const backgrounds = {
	info: 'bg-info',
	success: 'bg-success',
	warning: 'bg-warning',
	danger: 'bg-error',
	primary: 'bg-primary',
	secondary: 'bg-secondary',
	accent: 'bg-accent',
	dark: 'bg-dark',
	light: 'bg-light',
	transparent: 'bg-transparent',
	neutral: 'bg-neutral',
}

const colors = {
	info: 'text-info',
	success: 'text-success',
	warning: 'text-warning',
	danger: 'text-error',
	primary: 'text-primary',
	secondary: 'text-secondary',
	accent: 'text-accent',
	dark: 'text-dark',
	light: 'text-light',
	current: 'text-current',
	neutral: 'text-neutral',
}

const borderColors = {
	info: 'border-info',
	success: 'border-success',
	warning: 'border-warning',
	danger: 'border-error',
	primary: 'border-primary',
	secondary: 'border-secondary',
	accent: 'border-accent',
	dark: 'border-dark',
	light: 'border-light',
	current: 'border-current',
}

const shadows = {
	sm: 'shadow-sm shadow-[2px_2px_2px_0_rgba(0,0,0,0.15)] rtl:shadow-[-2px_2px_2px_0_rgba(0,0,0,0.15)] dark:shadow-[2px_2px_2px_0_rgba(255,255,255,0.2)] rtl:dark:shadow-[-2px_2px_2px_0_rgba(255,255,255,0.2)]',
	md: 'shadow-md shadow-[4px_4px_4px_0_rgba(0,0,0,0.15)] rtl:shadow-[-4px_4px_4px_0_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_4px_0_rgba(255,255,255,0.2)] rtl:dark:shadow-[-4px_4px_4px_0_rgba(255,255,255,0.2)]',
	lg: 'shadow-lg shadow-[6px_6px_6px_0_rgba(0,0,0,0.15)] rtl:shadow-[-6px_6px_10px_6px_rgba(0,0,0,0.15)] dark:shadow-[6px_6px_6px_0_rgba(255,255,255,0.2)] rtl:dark:shadow-[-6px_6px_6px_0_rgba(255,255,255,0.2)]',
	xl: 'shadow-xl shadow-[8px_8px_8px_0_rgba(0,0,0,0.15)] rtl:shadow-[-8px_8px_8px_0_rgba(0,0,0,0.15)] dark:shadow-[8px_8px_8px_0_rgba(255,255,255,0.2)] rtl:dark:shadow-[-8px_8px_8px_0_rgba(255,255,255,0.2)]',
	none: 'shadow-none',
}

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(props, ref) {
	const {
		size = 'md',
		className = '',
		style,
		btnBackground = 'primary',
		btnColor = 'light',
		layout = 'default',
		outline = false,
		outlineColor = 'current',
		shadow = 'none',
		type = 'button',
		title,
		id,
		disabled,
		onClick,
		onBlur,
		tabindex,
		role = 'button',
		textcase = 'capitalize',
		isBold = false,
		hoverScale = false,
		suppressHydrationWarning = false,
		children,
	} = props
	const sizeClasses = useMemo(() => sizes[size], [size])
	const backgroundClasses = useMemo(() => backgrounds[btnBackground], [btnBackground])
	const colorClasses = useMemo(() => colors[btnColor], [btnColor])
	const layoutClasses = useMemo(() => layouts[layout], [layout])
	const shadowClasses = useMemo(() => shadows[shadow], [shadow])
	const outlineStyles = useMemo(
		() => `border-solid ${borderColors[outlineColor]}`,
		[outlineColor]
	)
	const outlineClasses = useMemo(
		() => (outline ? outlineStyles : 'border-none'),
		[outline, outlineStyles]
	)

	return (
		<button
			className={twMerge(
				`button group flex gap-2 items-center justify-center group-[.flex-col]:justify-start scale-100 focus:text-accent ${sizeClasses} p-[.5em] ${textcase} ${backgroundClasses} ${colorClasses} ${layoutClasses} ${outlineClasses} ${shadowClasses} ${stateStyles} ${isBold ? 'font-semibold' : 'font-normal'} ${hoverScale ? 'hover:scale-105 disabled:hover:scale-100' : ''}`,
				className
			)}
			style={style}
			data-testid='button'
			type={type}
			title={title}
			id={id}
			disabled={disabled}
			tabIndex={tabindex}
			onClick={onClick}
			onBlur={onBlur}
			ref={ref}
			role={role}
			suppressHydrationWarning={suppressHydrationWarning}
		>
			{children}
		</button>
	)
})

export default Button
