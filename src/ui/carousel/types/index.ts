interface DataProps {
	name: string
	src: string
	description: string
	link: string
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	data: DataProps[]
	children?: React.ReactNode
	className?: string
	style?: React.CSSProperties
	caption?: boolean
	autoplay?: boolean
	autoplayDuration?: number
	outline?: 'none' | 'thin' | 'medium' | 'thick'
	rounded?: 'none' | 'md' | 'lg' | 'xl'
	gallery?: boolean
	aspect?: 'landscape' | 'portrait' | 'square' | 'video' | 'circle'
	buttonLayout?: 'rounded' | 'square' | 'circle'
	buttonsPosition?: 'top' | 'middle' | 'bottom'
	buttonIcon?: 'arrow' | 'chevron'
	buttonSize?: 'md' | 'lg' | 'xl'
	buttonBackground?: 'dark' | 'light' | 'transparent'
	buttonColor?: 'dark' | 'light'
	buttonOutline?: boolean
}
