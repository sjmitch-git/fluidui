'use client'

import React, { useState, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import Files from './Files'
import { FileUploadProps, acceptTypes } from './types'
import { Label, Input, Select, Checkbox } from '..'

import { FaUpload } from 'react-icons/fa'

const sizes = {
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
}

const FileUpload = ({
	className = '',
	size = 'md',
	accept = '*',
	label = 'File Upload',
	icon,
	onChange,
	setFiles,
	showMultiple = false,
	multipleLabel = 'Select Multiple',
}: FileUploadProps) => {
	const [files, setLocalFiles] = useState<FileList | null>(null)
	const [multiple, setMultiple] = useState(false)
	const [selectedAcceptType, setSelectedAcceptType] = useState<string>(accept)

	const handleAcceptTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedAcceptType(event.target.value)
		setLocalFiles(null)
		if (setFiles) {
			setFiles([])
		}
	}

	const sizeClasses = useMemo(() => sizes[size], [size])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMultiple(event.target.checked)
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files
		if (files) {
			setLocalFiles(files)
			if (onChange) onChange(event)
		}
	}

	const deleteFile = (fileToDelete: File) => {
		if (files) {
			const updatedFiles = Array.from(files).filter((file) => file !== fileToDelete)
			const dataTransfer = new DataTransfer()
			updatedFiles.forEach((file) => dataTransfer.items.add(file))
			setLocalFiles(dataTransfer.files)
			if (setFiles) {
				setFiles(updatedFiles)
			}
		}
	}

	return (
		<div
			className={twMerge(`fileupload group overflow-hidden ${sizeClasses}`, className)}
			data-testid='fileupload'
		>
			<div className='flex flex-row gap-2'>
				<Label
					label={icon ? <FaUpload title={label} /> : label}
					layout='col'
					size={size}
					type='file'
					className='items-center !flex !flex-row !w-auto'
				>
					<Input
						accept={selectedAcceptType}
						name='file'
						type='file'
						onChange={handleFileChange}
						multiple={multiple}
						size={size}
					/>
				</Label>
				<div className='grid grid-cols-2 gap-4 items-center'>
					<Select
						options={acceptTypes}
						id='acceptType'
						value={selectedAcceptType}
						defaultValue={accept}
						onChange={handleAcceptTypeChange}
						dropdownSize={size}
						className='border-neutral'
						rounded='md'
					/>
					{showMultiple && (
						<div className=''>
							<Checkbox
								label={multipleLabel}
								name='multiple'
								size={size}
								onChange={handleChange}
								className='!gap-2 border-neutral'
								rounded='full'
							/>
						</div>
					)}
				</div>
			</div>
			{files && files.length > 0 && (
				<Files
					files={Array.from(files)}
					deleteFile={deleteFile}
				/>
			)}
		</div>
	)
}

export default FileUpload
