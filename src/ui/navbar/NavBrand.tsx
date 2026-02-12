import React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { NavBrandProps } from './types'

const NavBrand = ({
	brand,
	src,
	brandStyles,
	brandAspectRatio = '1 / 1',
	prefetch = false,
}: NavBrandProps) => {
	const backgroundStyle = src ? { backgroundImage: `url(${src})` } : undefined

	return (
		<div className={twMerge('navbrand w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6', brandStyles)}>
			<Link
				href='/'
				className='brand-link block w-full bg-center bg-no-repeat bg-contain'
				style={{ aspectRatio: brandAspectRatio, ...backgroundStyle }}
				prefetch={prefetch}
				aria-label={brand}
			>
				{brand ? <span className='sr-only'>{brand}</span> : null}
			</Link>
		</div>
	)
}

export default NavBrand
