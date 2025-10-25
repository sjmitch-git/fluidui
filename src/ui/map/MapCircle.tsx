'use client'

import dynamic from 'next/dynamic'

const DynamicMapCircle = dynamic(() => import('./LazyMapCircle'), {
	ssr: false,
})

import { MapCircleProps } from './types'

const MapCircle = ({ ...rest }: MapCircleProps) => {
	return <DynamicMapCircle {...rest} />
}

export default MapCircle
