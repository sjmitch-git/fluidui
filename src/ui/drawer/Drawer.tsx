'use client'

import React, { useState, useEffect, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { CloseButton } from '..'
import { DrawerProps } from './types'

const positions = {
	top: 'top-0',
	bottom: 'bottom-0',
}

const drawerClasses =
	'fixed left-0 right-0 z-100 min-h-min w-full max-h-screen bg-light text-dark dark:bg-dark dark:text-light duration-500'

const Drawer = ({
	open = false,
	position = 'bottom',
	backdrop = false,
	className = '',
	style,
	children,
	onClose,
}: DrawerProps) => {
	const [show, setShow] = useState<boolean>(false)

	useEffect(() => {
		if (open) {
			setShow(true)
			document.body.style.overflow = 'hidden'
		} else {
			setShow(false)
			document.body.style.overflow = ''
		}

		return () => {
			setShow(false)
			document.body.style.overflow = ''
		}
	}, [open])

	const positionClasses = useMemo(() => positions[position], [position])

	const close = () => {
		onClose(false)
	}

	return (
		<>
			{backdrop && (
				<div
					className={`backdrop bg-dark dark:bg-neutral fixed top-0 right-0 bottom-0 left-0 w-full ${
						show ? 'block opacity-50' : 'hidden opacity-0'
					} transition-opacity duration-500`}
					onClick={close}
				></div>
			)}
			<aside
				className={twMerge(
					`drawer group ${drawerClasses} ${positionClasses} ${
						show
							? 'translate-y-0'
							: position === 'bottom'
								? 'translate-y-full'
								: '-translate-y-full'
					}`,
					className
				)}
				style={style}
			>
				<header className={`sidebar-header`}>
					<CloseButton
						onClick={close}
						layout='circle'
						size='md'
						className={`fixed top-3 right-3 !p-0`}
					/>
				</header>
				<div className={`sidebar-content max-h-full overflow-y-auto p-4 pt-8`}>
					{children}
				</div>
			</aside>
		</>
	)
}

export default Drawer
