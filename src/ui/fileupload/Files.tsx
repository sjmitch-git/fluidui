import React from 'react'
import { Button } from '..'
import { FileProps } from './types'

const Files = ({ files, deleteFile }: FileProps) => {
	const formatFileSize = (size: number) => {
		const units = ['Bytes', 'KB', 'MB', 'GB']
		let unitIndex = 0

		while (size >= 1024 && unitIndex < units.length - 1) {
			size /= 1024
			unitIndex++
		}

		const formattedSize = size.toFixed(size < 10 ? 2 : 0)

		return `${formattedSize} ${units[unitIndex]}`
	}

	const formatDate = (date: number) => {
		const lastModifiedDate = new Date(date)
		return lastModifiedDate.toLocaleDateString()
	}

	return (
		<div className='pt-2'>
			{files.length > 0 ? (
				<ul className='fileslist flex flex-col gap-4'>
					{Array.from(files).map((file, index) => (
						<li
							className='filesitem rounded border shadow-md p-4 bg-light text-dark dark:bg-dark dark:text-light'
							key={index}
						>
							<h3 className='file-title truncate mb-4'>{file.name}</h3>
							<div className='file-details flex justify-between items-center'>
								<small>{formatDate(file.lastModified)}</small>
								<small>{formatFileSize(file.size)}</small>
								<Button
									className='!p-0'
									size='sm'
									btnBackground='transparent'
									btnColor='danger'
									onClick={() => deleteFile(file)}
								>
									Delete?
								</Button>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p>No files selected.</p>
			)}
		</div>
	)
}

export default Files
