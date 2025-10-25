export interface HeroProps {
	title: string
	body?: React.ReactNode
	theme?: 'dark' | 'light' | 'responsive'
	align?: 'left' | 'center' | 'right'
	layout?: 'col' | 'row'
	titleLevel?: 1 | 2 | 3 | 4
	titleWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
	titleTransform?: 'normal' | 'capitalize' | 'uppercase' | 'lowercase'
	bgImage?: string
	bgVideo?: string
	bgVideoPoster?: string
	bgBlur?: boolean
	bgGrayscale?: 'none' | 'grayscale' | 'sepia'
	children?: React.ReactNode
	className?: string
	style?: React.CSSProperties
}
