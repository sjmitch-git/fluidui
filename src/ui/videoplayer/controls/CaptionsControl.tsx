import React, { useState } from 'react'

import { FaClosedCaptioning } from 'react-icons/fa'

import { Button, Select } from '../..'

const CaptionsControl = (
	handleCaptionChange: (value: string) => void,
	tracks: string[],
	srcLangs: string[]
) => {
	const [showSelect, setShowSelect] = useState(false)

	const onCaptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setShowSelect(false)
		if (handleCaptionChange) handleCaptionChange(e.target.value)
	}

	return tracks ? (
		<div
			id='captions-control'
			className='relative'
		>
			<Button
				title='Toggle caption options'
				onClick={() => setShowSelect(!showSelect)}
				btnBackground='transparent'
				btnColor='light'
				size='sm'
				className='lg:-ml-2'
			>
				<FaClosedCaptioning />
				<span className='sr-only'>Toggle caption options</span>
			</Button>
			<Select
				title='Select Captions'
				className={`!bg-light !text-dark bottom-8 right-0 absolute ${
					showSelect ? 'block' : 'hidden'
				}`}
				onChange={onCaptionChange}
				dropdownSize='sm'
				rows={tracks.length + 1}
			>
				<>
					<option value='-1'>off</option>
					{tracks.map((_track, index) => (
						<option
							key={index}
							value={`${index}`}
						>
							{srcLangs[index]}
						</option>
					))}
				</>
			</Select>
		</div>
	) : null
}

export default CaptionsControl
