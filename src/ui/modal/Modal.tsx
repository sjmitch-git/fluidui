'use client'

import React, { useRef, useEffect, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { CloseButton } from '..'

import { useDisableBack } from './hooks/useDisableBack'

import { ModalProps } from './types'

const defaultStyles = 'dialog  border-none'

const themes = {
	light: 'backdrop:bg-white',
	dark: 'dark backdrop:bg-black',
}

const Modal = ({
	src,
	caption,
	alt,
	onClick,
	open,
	theme = 'dark',
	className = '',
}: ModalProps) => {
	useDisableBack()
	let dialogRef = useRef<HTMLDialogElement>(null)
	const themeClasses = useMemo(() => themes[theme], [theme])

	useEffect(() => {
		if (dialogRef.current) {
			const modal = dialogRef.current
			if (open) {
				modal.showModal()
				document.body.style.overflowY = 'hidden'
			} else {
				modal.close()
				document.body.style.overflowY = 'auto'
			}
		}
	}, [open, dialogRef])

	return (
		<dialog
			className={twMerge(`dialog group border-none ${themeClasses}`, className)}
			ref={dialogRef}
		>
			<figure>
				<img
					src={src}
					onClick={onClick}
					alt={alt}
					className='cursor-zoom-out'
				/>
				<figcaption className='text-center p-2 bg-light dark:bg-dark dark:text-light'>
					{caption}
				</figcaption>
			</figure>

			<CloseButton
				onClick={onClick}
				layout='circle'
				size='lg'
				className='right-3 top-3'
			/>
		</dialog>
	)
}

export default Modal
