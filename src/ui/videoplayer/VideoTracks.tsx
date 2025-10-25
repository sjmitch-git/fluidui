import React from 'react'

import { VideoTracksProps } from './types'

const VideoTracks = ({ tracks, srcLangs }: VideoTracksProps) => {
	return tracks && srcLangs
		? tracks.map((src, index) => (
				<track
					kind='subtitles'
					src={src}
					srcLang={srcLangs[index]}
					key={index}
				/>
		  ))
		: null
}

export default VideoTracks
