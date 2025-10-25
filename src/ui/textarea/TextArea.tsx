import React, { useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { TextareaProps } from './types'

import { Label } from '..'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
}

const TextArea = ({
	className = '',
	textAreaStyles = '',
	label,
	layout,
	required,
	name = 'textarea',
	value,
	placeholder,
	size = 'md',
	onChange,
	rows = 2,
	resize = true,
	maxLength,
	disabled = false,
}: TextareaProps) => {
	const sizeClasses = useMemo(() => sizes[size], [size])

	return (
		<Label
			label={label}
			layout={layout}
			size={size}
			required={required}
			className={twMerge(`font-semibold`, className)}
			data-testid={`label-${name}`}
		>
			<textarea
				className={twMerge(
					`form-textarea font-normal w-full invalid:!border-accent dark:bg-dark dark:text-light color-scheme:light dark:[color-scheme:dark] border-neutral disabled:bg-neutral disabled:cursor-default disabled:text-dark ${className} ${sizeClasses} ${
						resize ? 'resize' : 'resize-none'
					}`,
					textAreaStyles
				)}
				name={name}
				id={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				rows={rows}
				maxLength={maxLength}
				disabled={disabled}
				required={required}
			/>
		</Label>
	)
}

export default TextArea
