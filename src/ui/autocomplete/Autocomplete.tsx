import React from 'react'

import { twMerge } from 'tailwind-merge'

import { AutocompleteProps } from './types'

import { Input, Label } from '..'

const Autocomplete = ({
	className = '',
	size = 'md',
	data,
	list,
	required,
	name,
	placeholder = 'Please Select',
	onChange,
	autocomplete,
	label,
	layout = 'row',
	rounded,
	suppressHydrationWarning = false,
}: AutocompleteProps) => {
	return (
		<Label
			label={label}
			layout={layout}
			required={required}
			size={size}
		>
			<Input
				list={list}
				placeholder={placeholder}
				required={required}
				name={name || list}
				onChange={onChange}
				className={twMerge(
					`autocomplete group [&::-webkit-calendar-picker-indicator]:opacity-0`,
					className
				)}
				size={size}
				autocomplete={autocomplete}
				data-testid={name || list}
				rounded={rounded}
				suppressHydrationWarning={suppressHydrationWarning}
			/>

			<datalist
				className='datalist bg-light text-dark dark:bg-dark dark:text-light dark:[color-scheme:dark]'
				id={list}
				data-testid='datalist'
			>
				{data.map((el, index) => (
					<option
						key={index}
						value={el}
					/>
				))}
			</datalist>
		</Label>
	)
}

export default Autocomplete
