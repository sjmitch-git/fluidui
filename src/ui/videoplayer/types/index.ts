export type VideoFormat = 'mp4' | 'webm' | 'ogg'
export type PreloadOption = 'auto' | 'metadata' | 'none'
export type ControlOption = 'sound' | 'fullscreen' | 'pip' | 'captions'

export interface VideoTracksProps {
	tracks?: string[]
	srcLangs?: string[]
}

export interface MediaProps extends VideoTracksProps {
	src: string
	poster?: string
	loop?: boolean
	preload?: PreloadOption
	formats?: VideoFormat[]
	fallback?: string
	muted?: boolean
	autoplay?: boolean
	aspect?: 'square' | 'phone' | 'video' | 'television' | 'cinema' | 'ultrawide'
	grayscale?: 'none' | 'grayscale' | 'sepia'
}

export interface VideoSpecificProps {
	defaultError?: string
	play?: boolean
	togglePlay?: () => void
	playEnded?: () => void
	pictureInPicture?: boolean
	controls?: boolean
	trackIndex?: string
	videoWidth?: string
	videoHeight?: string
	blur?: boolean
}

export interface VideoProps extends MediaProps, VideoSpecificProps {
	setDuration?: (duration: number) => void
	setTime?: (time: number) => void
	currentTime?: number
	volume?: number
	className?: string
}

export interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement>, MediaProps {
	className?: string
	defaultError?: string
	controlOptions?: ControlOption[]
	progressBg?: string
	progressColor?: string
}

export interface VideoControlProps extends React.HTMLAttributes<HTMLDivElement>, VideoTracksProps {
	duration: number
	time: number
	togglePlay: () => void
	play: boolean
	fullscreen: boolean
	muted: boolean
	onScrubChange?: (time: number) => void
	onFullscreen?: () => void
	onPIP?: () => void
	onMute: () => void
	onVolume: (volume: number) => void
	onCaption: (index: string) => void
	controlOptions?: ControlOption[]
	progressBg?: string
	progressColor?: string
}
