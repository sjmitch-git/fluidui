'use client'

import React from 'react'
import { Rectangle, Popup } from 'react-leaflet'
import { MapRectangleProps } from './types'

const MapRectangle = ({
	bounds,
	color = '#3388ff',
	fillColor,
	popupContent,
}: MapRectangleProps) => {
	return (
		<Rectangle
			bounds={bounds}
			pathOptions={{
				color,
				fillColor,
			}}
		>
			{popupContent && <Popup>{popupContent}</Popup>}
		</Rectangle>
	)
}

export default MapRectangle
