'use client'

import React, { useRef, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { Input } from '..'
import { SwitchProps } from './types'

const requiredClasses = "after:text-accent after:content-['_*']"

const sizes = {
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-2xl',
}

const unCheckedColors = {
	info: 'bg-info',
	success: 'bg-success',
	warning: 'bg-warning',
	danger: 'bg-danger',
	primary: 'bg-primary',
	secondary: 'bg-secondary',
	current: 'bg-current',
	neutral: 'bg-neutral',
}

const checkedColors = {
	info: 'peer-checked:bg-info',
	success: 'peer-checked:bg-success',
	warning: 'peer-checked:bg-warning',
	danger: 'peer-checked:bg-danger',
	primary: 'peer-checked:bg-primary',
	secondary: 'peer-checked:bg-secondary',
	current: 'peer-checked:bg-current',
	neutral: 'peer-checked:bg-neutral',
}

const Switch = ({
	label,
	labelIsBold,
	labelSize = 'base',
	className = '',
	style,
	onChange,
	checked,
	defaultChecked,
	name,
	shape = 'circle',
	required = false,
	switchOffContent = '',
	switchOnContent = '',
	switchOffColor = 'neutral',
	switchOnColor = 'info',
	thin = false,
	disabled,
	showHint = false,
	hint,
}: SwitchProps) => {
	const checkbox = useRef<HTMLInputElement>(null!)

	const unCheckedColorClasses = useMemo(() => unCheckedColors[switchOffColor], [switchOffColor])
	const checkedColorClasses = useMemo(() => checkedColors[switchOnColor], [switchOnColor])
	const sizeClasses = useMemo(() => sizes[labelSize], [labelSize])

	const sliderBeforeClasses = useMemo(() => {
		return `before:flex before:justify-center before:items-center before:text-lg before:font-bold before:absolute before:h-8 before:w-8 before:transition-transform ${
			thin
				? 'before:left-0 before:-top-3 before:bg-inherit'
				: 'before:left-1 before:bottom-1 before:bg-white dark:before:bg-dark'
		}`
	}, [thin])

	const handleKeyup = (event: any) => {
		if (event.key !== 'Enter') return
		checkbox.current.checked = !checkbox.current.checked
	}

	const handleChange = (event: any) => {
		if (onChange) onChange(event)
	}

	return (
		<div className='switch'>
			<label
				className={twMerge(
					`switch-label group relative ${sizeClasses} ${
						labelIsBold ? 'font-semibold' : 'font-normal'
					} ${
						disabled ? 'cursor-default text-neutral' : 'cursor-pointer'
					} h-8 w-auto flex-row-reverse items-center ${label ? 'gap-4' : 'gap-0'} flex row-reverse`,
					className
				)}
				style={style}
				onKeyUp={handleKeyup}
			>
				<span className={`switch-text grow ${required ? requiredClasses : ''}`}>
					{label}
				</span>
				<Input
					name={name}
					id={name}
					type='checkbox'
					data-testid={`input-${name}`}
					className={`checkbox hidden peer`}
					required={required}
					disabled={disabled}
					onChange={handleChange}
					checked={checked}
					defaultChecked={defaultChecked}
					ref={checkbox}
				/>
				<span
					className={`slider block relative ${unCheckedColorClasses} bottom-0 left-0 right-0 top-0 ${
						thin ? 'h-2 w-[60px]' : 'h-10 w-[67px]'
					} ${disabled ? 'cursor-default bg-neutral opacity-60' : 'cursor-pointer'} transition-transform ${
						shape === 'circle' ? 'rounded-full before:rounded-full' : ''
					} ${sliderBeforeClasses} before:content-[attr(data-off)] peer-checked:before:content-[attr(data-on)] before:translate-x-0 peer-checked:before:translate-x-7 ${checkedColorClasses}`}
					data-off={switchOffContent}
					data-on={switchOnContent}
				></span>
			</label>
			{showHint && <p className={`hint text-sm font-normal mt-4 dark:text-light`}>{hint}</p>}
		</div>
	)
}

export default Switch
