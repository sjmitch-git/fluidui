'use client'

import dynamic from 'next/dynamic'

const DynamicMapRectangle = dynamic(() => import('./LazyMapRectangle'), {
	ssr: false,
})

import { MapRectangleProps } from './types'

const MapRectangle = ({ ...rest }: MapRectangleProps) => {
	return <DynamicMapRectangle {...rest} />
}

export default MapRectangle
