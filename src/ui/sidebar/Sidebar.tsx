'use client'

import React, { useState, useEffect, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { CloseButton } from '..'
import { SidebarProps } from './types'

const positions = {
	left: 'left-0',
	right: 'right-0',
}

const sidebarClasses =
	'fixed top-0 z-100  max-w-md h-full overflow-y-auto bg-light text-dark dark:bg-dark dark:text-light duration-500'

const Sidebar = ({
	open = false,
	position = 'right',
	backdrop = false,
	className = '',
	style,
	children,
	onClose,
}: SidebarProps) => {
	const [show, setShow] = useState<boolean>(false)
	const [touchPosition, setTouchPosition] = useState<number>(null!)

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

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setTouchPosition(e.touches[0].clientX)
	}

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (touchPosition === null) return
		const diff = touchPosition - e.touches[0].clientX

		if (position === 'right' && diff < -5) {
			close()
			setTouchPosition(null!)
		}

		if (position === 'left' && diff > 5) {
			close()
			setTouchPosition(null!)
		}
	}

	const close = () => {
		onClose(false)
	}

	return (
		<>
			{backdrop && (
				<div
					className={`backdrop bg-dark dark:bg-neutral fixed top-0 right-0 bottom-0 left-0 w-full ${
						show ? 'block opacity-50' : 'hidden opacity-0'
					} transition-opacity`}
					onClick={close}
				></div>
			)}
			<aside
				className={twMerge(
					`sidebar ${sidebarClasses} ${positionClasses} ${
						show
							? 'translate-x-0'
							: position === 'right'
								? 'translate-x-full'
								: '-translate-x-full'
					}`,
					className
				)}
				style={style}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
			>
				<header className={`sidebar-header`}>
					<CloseButton
						onClick={close}
						layout='circle'
						size='md'
						className={`fixed top-3 ${position === 'right' ? 'left-3' : 'right-3'}`}
					/>
				</header>
				<div className={`sidebar-content max-h-full overflow-y-auto p-0 pt-8`}>
					{children}
				</div>
			</aside>
		</>
	)
}

export default Sidebar
