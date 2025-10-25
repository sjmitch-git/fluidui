export interface FigureProps extends React.HTMLAttributes<HTMLElement> {
	className?: string
	caption?: string
	aspect?:
		| 'landscape'
		| 'portrait'
		| 'square'
		| 'video'
		| 'circle'
		| 'phone'
		| 'ultrawide'
		| 'auto'
	src: string
	alt: string
	backdrop?: 'light' | 'dark'
}
