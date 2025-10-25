'use client'

import React from 'react'
import { Polyline, Popup } from 'react-leaflet'
import { MapLineProps } from './types'

const MapLine = ({
	positions,
	color = '#3388ff',
	weight = 3,
	dashArray,
	popupContent,
}: MapLineProps) => {
	return (
		<Polyline
			positions={positions}
			pathOptions={{
				color,
				weight,
				dashArray,
			}}
		>
			{popupContent && <Popup>{popupContent}</Popup>}
		</Polyline>
	)
}

export default MapLine
