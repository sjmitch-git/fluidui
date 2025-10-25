'use client'

import React, { useState, useEffect } from 'react'

import { twMerge } from 'tailwind-merge'

import Video from './Video'
import VideoControls from './VideoControls'
import { VideoPlayerProps } from './types'

const VideoPlayer = ({
	src,
	poster,
	loop,
	className = '',
	aspect = 'video',
	preload,
	fallback,
	formats = ['mp4'],
	defaultError = 'Oops! There was an unknown error.',
	muted = false,
	autoplay,
	controlOptions = ['sound', 'fullscreen', 'pip'],
	progressBg = '#cccccc',
	progressColor = '#ffffff',
	tracks,
	srcLangs,
	grayscale,
}: VideoPlayerProps) => {
	const [play, setPlay] = useState(false)
	const [duration, setDuration] = useState(0)
	const [time, setTime] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [fullscreen, setFullscreen] = useState(false)
	const [pictureInPicture, setPictureInPicture] = useState(false)
	const [mute, setMute] = useState(muted)
	const [volume, setVolume] = useState(5)
	const [trackIndex, setTrackIndex] = useState<string>()

	useEffect(() => {
		const handleFullscreenChange = () => {
			if (fullscreen && !document.fullscreenElement) setFullscreen(false)
		}

		document.addEventListener('fullscreenchange', handleFullscreenChange)

		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange)
		}
	}, [setFullscreen, fullscreen])

	useEffect(() => {
		setPlay(autoplay ?? false)

		return () => {
			setPlay(false)
		}
	}, [autoplay])

	const handleScrubChange = (time: number) => {
		setTime(time)
		setCurrentTime(time)
	}

	const handleEnded = () => {
		setPlay(false)
		handleScrubChange(0)
	}

	const handleVolume = (volume: number) => {
		setVolume(volume)
		volume === 0 ? setMute(true) : setMute(false)
	}

	const handleTogglePlay = () => setPlay(!play)

	const handleMute = () => setMute(!mute)

	const handleFullscreen = () => {
		setFullscreen(!fullscreen)
		if (typeof document !== null) {
			const player = document.getElementById('player')
			if (player) {
				if (!fullscreen) {
					player.requestFullscreen()
				} else document.exitFullscreen()
			}
		}
	}

	const handlePiP = () => setPictureInPicture(!pictureInPicture)

	const handleCaption = (index: string) => setTrackIndex(index)

	return (
		<div
			id='player'
			className={twMerge(
				`video-player w-full dark bg-black group relative ${
					fullscreen ? 'fullscreen' : ''
				}`,
				className
			)}
		>
			<Video
				src={src}
				controls={false}
				poster={poster}
				aspect={aspect}
				loop={loop}
				setDuration={setDuration}
				setTime={setTime}
				currentTime={currentTime}
				togglePlay={handleTogglePlay}
				playEnded={handleEnded}
				play={play}
				muted={mute}
				autoplay={autoplay}
				preload={preload}
				fallback={fallback}
				volume={volume}
				formats={formats}
				pictureInPicture={pictureInPicture}
				defaultError={defaultError}
				tracks={tracks}
				srcLangs={srcLangs}
				trackIndex={trackIndex}
				grayscale={grayscale}
			/>
			<VideoControls
				duration={duration}
				time={time}
				togglePlay={handleTogglePlay}
				play={play}
				onFullscreen={handleFullscreen}
				fullscreen={fullscreen}
				onMute={handleMute}
				muted={mute}
				onScrubChange={handleScrubChange}
				onVolume={handleVolume}
				onPIP={handlePiP}
				onCaption={handleCaption}
				controlOptions={controlOptions}
				progressBg={progressBg}
				progressColor={progressColor}
				tracks={tracks}
				srcLangs={srcLangs}
			/>
		</div>
	)
}

export default VideoPlayer
