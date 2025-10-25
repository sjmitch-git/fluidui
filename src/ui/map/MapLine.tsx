'use client'

import dynamic from 'next/dynamic'

const DynamicMapLine = dynamic(() => import('./LazyMapLine'), {
	ssr: false,
})

import { MapLineProps } from './types'

const MapLine = ({ ...rest }: MapLineProps) => {
	return <DynamicMapLine {...rest} />
}

export default MapLine
