'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { Input, Label } from '..'
import { RangeInputProps } from './types'

const thumbnailShapes = {
	circle: '[&&::-webkit-slider-thumb]:rounded-full',
	square: '[&&::-webkit-slider-thumb]:rounded-none',
}

const RangeInput = ({
	name = 'range',
	min = 0,
	max = 100,
	defaultValue = 50,
	step = '1',
	label,
	labelIsBold,
	size = 'md',
	layout = 'col',
	title = 'Current value:',
	hint = true,
	required = false,
	rangeActive = '#f59e0b',
	rangeBackground = '#9e9e9e',
	thumbnailColor = '#f59e0b',
	thumbnailActiveColor = '#ff0000',
	thumbnailShape = 'circle',
	rounded = true,
	style,
	className = '',
	onChange,
}: RangeInputProps) => {
	const [value, setValue] = useState(defaultValue)
	const [scrubRange, setScrubRange] = useState(defaultValue)
	const [modifier, setModifier] = useState(1)
	const [isFocused, setIsFocused] = useState(false)
	const [position, setPosition] = useState('right')

	useEffect(() => {
		setModifier(100 / max)
	}, [max])

	useEffect(() => {
		const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
		isRTL ? setPosition('left') : setPosition('right')
	}, [])

	const shapeClasses = useMemo(() => thumbnailShapes[thumbnailShape], [thumbnailShape])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setValue(newValue)
		setScrubRange(Number(newValue))
		if (onChange) onChange(newValue)
	}

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		setIsFocused(false)
	}

	let scrubStyle = {
		backgroundImage: `linear-gradient(to ${position}, ${rangeActive} 0%, ${rangeActive} ${
			scrubRange * modifier
		}%, ${rangeBackground} ${scrubRange * modifier}%, ${rangeBackground} 100%)`,
		color: `${isFocused ? thumbnailActiveColor : thumbnailColor}`,
	}

	return (
		<Label
			label={label}
			size={size}
			layout={layout}
			isBold={labelIsBold}
			required={required}
			type='range'
			className={twMerge(`range-label items-baseline`, className)}
			style={style}
		>
			<Input
				name={name}
				type='range'
				value={value}
				min={min}
				max={max}
				step={step}
				hint={hint}
				title={`${title} ${value}`}
				onChange={handleChange}
				onInput={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				size={size}
				rounded={`${rounded ? 'md' : 'none'}`}
				className={`${shapeClasses}`}
				style={scrubStyle}
			/>
		</Label>
	)
}

export default RangeInput
