export interface DataProps {
	name: string
	src: string
}

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
	data: DataProps[]
	className?: string
	style?: React.CSSProperties
	aspect?: 'landscape' | 'portrait' | 'square' | 'video' | 'circle' | 'phone'
	caption?: boolean
}
