export interface HeadingProps {
	level?: 1 | 2 | 3 | 4 | 5 | 6
	weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
	align?: 'left' | 'center' | 'right'
	transform?: 'normal' | 'capitalize' | 'uppercase' | 'lowercase'
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}
