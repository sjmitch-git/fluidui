'use client'

import React from 'react'
import { Polygon, Popup } from 'react-leaflet'
import { MapPolygonProps } from './types'

const MapPolygon = ({ positions, fill, stroke, popupContent }: MapPolygonProps) => {
	return (
		<Polygon
			positions={positions}
			fillColor={fill}
			stroke={stroke}
		>
			{popupContent && <Popup>{popupContent}</Popup>}
		</Polygon>
	)
}

export default MapPolygon
