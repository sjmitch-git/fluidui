export interface BadgeProps {
	className?: string
	style?: React.CSSProperties
	children: React.ReactNode
	layout?: 'square' | 'circle' | 'rounded' | 'pill'
	position?: 'inline' | 'left' | 'right'
	badgeBackground?:
		| 'dark'
		| 'light'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'neutral'
		| 'transparent'
	badgeColor?:
		| 'dark'
		| 'light'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'current'
		| 'accent'
		| 'neutral'
	size?: 'sm' | 'md' | 'lg' | 'inherit'
}
