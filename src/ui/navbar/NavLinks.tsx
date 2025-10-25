import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Button } from '..'
import { NavLinkProps } from './types'

const placements = {
	top: 'top-full',
	bottom: 'bottom-full',
}

const NavLinks = ({
	links,
	linkStyles = 'lg:text-dark dark:lg:text-light',
	btnBackground,
	btnColor = 'light',
	btnLayout = 'square',
	btnSize = 'md',
	placement = 'top',
	onLinkClick,
	prefetch = false,
}: NavLinkProps) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const placementClasses = useMemo(() => placements[placement], [placement])

	const onblur = () => {
		setTimeout(() => {
			setIsMobileMenuOpen(false)
		}, 100)
	}

	return (
		<div>
			<Button
				btnBackground={btnBackground}
				btnColor={btnColor}
				size={btnSize}
				layout={btnLayout}
				title='Menu'
				className='lg:hidden focus:outline-none'
				onClick={() => setIsMobileMenuOpen((prev) => !prev)}
				onBlur={() => onblur()}
				suppressHydrationWarning={true}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					className='w-[1em] h-[1em]'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
					/>
				</svg>
			</Button>
			<div
				className={twMerge(
					'menu flex gap-4 lg:flex-row lg:static lg:top-auto lg:bg-transparent lg:w-auto lg:h-auto',
					isMobileMenuOpen
						? `absolute ${placementClasses} left-0 dark:bg-slate-200 bg-slate-600 w-full flex-col h-auto py-4`
						: 'hidden lg:flex'
				)}
			>
				{links.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						prefetch={prefetch}
						className={twMerge(
							'navbar-link px-4 py-0 lg:px-2 lg:py-0 lg:text-xl text-light dark:text-dark',
							linkStyles
						)}
						onClick={() => {
							setIsMobileMenuOpen(false)
							onLinkClick?.(link.name)
						}}
					>
						{link.name}
					</Link>
				))}
			</div>
		</div>
	)
}

export default NavLinks
