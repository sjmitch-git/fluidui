export interface CardProps {
	className?: string
	style?: React.CSSProperties
	layout?: 'col' | 'row' | 'col_reverse'
	children: React.ReactNode
	shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
	outline?: boolean
}

export interface CardHeaderProps {
	className?: string
	title: string
	titlestyles?: string
	children?: React.ReactNode
}

export interface CardBodyProps {
	className?: string
	children: React.ReactNode
}

export interface CardImageProps {
	className?: string
	title: string
	src: string
	aspect?: 'landscape' | 'portrait' | 'square' | 'video'
}

export interface CardFooterProps {
	className?: string
	link?: string
	linkLabel?: string
	children?: React.ReactNode
}
