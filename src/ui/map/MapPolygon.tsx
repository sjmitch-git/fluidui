'use client'

import dynamic from 'next/dynamic'

const DynamicMapPolygon = dynamic(() => import('./LazyMapPolygon'), {
	ssr: false,
})

import { MapPolygonProps } from './types'

const MapPolygon = ({ ...rest }: MapPolygonProps) => {
	return <DynamicMapPolygon {...rest} />
}

export default MapPolygon
