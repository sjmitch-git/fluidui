'use client'

import React from 'react'
import { Circle, Popup } from 'react-leaflet'
import { MapCircleProps } from './types'

const MapCircle = ({
	position,
	radius,
	fill,
	stroke,
	fillOpacity,
	opacity = 1,
	popupContent,
}: MapCircleProps) => {
	return (
		<Circle
			center={position}
			radius={radius}
			pathOptions={{
				fillColor: fill,
				fillOpacity,
				color: stroke ? fill : undefined,
				opacity,
			}}
		>
			{popupContent && <Popup>{popupContent}</Popup>}
		</Circle>
	)
}

export default MapCircle
