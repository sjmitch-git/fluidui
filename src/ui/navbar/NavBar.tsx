'use client'

import React, { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import NavLinks from './NavLinks'
import NavBrand from './NavBrand'
import { NavBarProps } from './types'

const placements = {
	top: 'sticky top-0',
	bottom: 'fixed bottom-0',
}

const NavBar = ({
	brand,
	brandSrc,
	brandStyles,
	links,
	linkStyles,
	btnBackground = 'dark',
	btnColor = 'light',
	btnLayout,
	btnSize,
	children,
	navStyles = 'bg-slate-200 dark:bg-slate-600',
	onLinkClick,
	placement = 'top',
	prefetch = false,
}: NavBarProps) => {
	const placementClasses = useMemo(() => placements[placement], [placement])
	return (
		<nav
			className={twMerge(
				`${placementClasses} left-0 w-full z-10 flex justify-between items-center px-4 py-2`,
				navStyles
			)}
		>
			{brand ? (
				<NavBrand
					brand={brand}
					src={brandSrc}
					brandStyles={brandStyles}
				/>
			) : (
				<div></div>
			)}
			<div className='flex flex-row-reverse lg:flex-row items-center gap-4'>
				<NavLinks
					links={links}
					linkStyles={linkStyles}
					placement={placement}
					btnBackground={btnBackground}
					btnColor={btnColor}
					btnLayout={btnLayout}
					btnSize={btnSize}
					onLinkClick={onLinkClick}
					prefetch={prefetch}
				/>
				{children}
			</div>
		</nav>
	)
}

export default NavBar
