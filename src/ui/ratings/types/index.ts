export interface RatingsProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
	icon?: 'star' | 'smiley' | 'thumb' | 'heart' | 'check' | 'thumbdown' | 'frown'
	customIcon?: React.ReactNode
	rating: number
	range?: number
	spacing?: '0' | '1' | '2'
	shape?: 'square' | 'circle' | 'rounded'
	ratingsBackground?:
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
	ratingsColor?:
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
	size?: 'sm' | 'md' | 'lg' | 'inherit'
}
