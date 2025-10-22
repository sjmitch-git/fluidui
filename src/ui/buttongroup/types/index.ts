export interface ButtonGroupProps {
	className?: string
	style?: React.CSSProperties
	children: React.ReactNode
	label?: string
	layout?: 'horizontal' | 'vertical'
	rounded?: boolean
	outline?: 'none' | 'thin' | 'thick'
	outlineColor?: 'none' | 'light' | 'dark' | 'grey'
	gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}
