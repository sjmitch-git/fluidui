import React from 'react'

import { twMerge } from 'tailwind-merge'

import { Input, Label } from '..'

import { CheckboxProps } from './types'

const Checkbox = ({
	name = 'checkbox',
	className = '',
	style,
	label = 'I agree to Terms & Conditions',
	size = 'md',
	rounded = 'none',
	required = false,
	checked = false,
	labelIsBold = false,
	hint,
	onChange,
	suppressHydrationWarning = false,
}: CheckboxProps) => {
	return (
		<div className={`text-${size}`}>
			<Label
				type='checkbox'
				label={label}
				className={twMerge(
					`check-label group ${labelIsBold ? 'font-bold' : 'font-normal'}`,
					className
				)}
				size={size}
				required={required}
				layout='row_reverse'
				style={style}
			>
				<Input
					name={name}
					id={name}
					type='checkbox'
					data-testid={`input-${name}`}
					className={`checkbox`}
					size={size}
					rounded={rounded}
					required={required}
					defaultChecked={checked}
					onChange={onChange}
					suppressHydrationWarning={suppressHydrationWarning}
				/>
			</Label>
			{hint && (
				<p className={`hint text-[.8em] font-normal mt-[.8em] dark:text-light`}>{hint}</p>
			)}
		</div>
	)
}

export default Checkbox
