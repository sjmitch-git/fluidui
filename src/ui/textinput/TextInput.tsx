'use client'

import React, { useRef } from 'react'

import { twMerge } from 'tailwind-merge'

import { Input, Label } from '..'

import { TextInputProps } from './types'

const TextInput = ({
	type = 'text',
	name = 'name',
	id = 'counter',
	className = '',
	value,
	onInputChange,
	size = 'md',
	label,
	layout = 'col',
	title,
	hint = false,
	placeholder,
	inputStyles = '',
	rounded = 'md',
	required,
	readonly,
	autocomplete = 'off',
	pattern,
	disabled,
}: TextInputProps) => {
	const input = useRef<HTMLInputElement>(null!)

	const handleChange = (e: any) => {
		if (!onInputChange) return
		const value = e.target.value
		onInputChange(value)
	}

	return (
		<Label
			label={label}
			layout={layout}
			forId={id}
			size={size}
			type={type}
			required={required}
			className={twMerge(`font-semibold`, className)}
			data-testid={`label-${name}`}
		>
			<Input
				name={name}
				id={id}
				type={type}
				value={value}
				ref={input}
				onChange={handleChange}
				data-testid={`input-${name}`}
				className={twMerge(`border-neutral`, inputStyles)}
				rounded={rounded}
				size={size}
				title={title}
				placeholder={placeholder}
				hint={hint}
				autocomplete={autocomplete}
				required={required}
				pattern={pattern}
				readonly={readonly}
				disabled={disabled}
			/>
		</Label>
	)
}

export default TextInput
