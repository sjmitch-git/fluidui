import React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { NavBrandProps } from './types'

const NavBrand = ({ brand, src, brandStyles, prefetch = false }: NavBrandProps) => {
	return (
		<div className={twMerge(`navbrand w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6`, brandStyles)}>
			<Link
				href='/'
				prefetch={prefetch}
			>
				<img
					src={src}
					alt={brand}
				/>
			</Link>
		</div>
	)
}

export default NavBrand
