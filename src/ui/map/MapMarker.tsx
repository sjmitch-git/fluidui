'use client'

import dynamic from 'next/dynamic'

const DynamicMapmarker = dynamic(() => import('./LazyMapMarker'), {
	ssr: false,
})

import { MapMarkerProps } from './types'

const MapMarker = ({ ...rest }: MapMarkerProps) => {
	return <DynamicMapmarker {...rest} />
}

export default MapMarker
