export interface CloseButtonProps {
	className?: string
	layout?: 'square' | 'circle'
	size?: 'sm' | 'md' | 'lg' | 'xl'
	onClick?: (e: any) => void
	disabled?: boolean
	title?: string
	hoverScale?: boolean
}
