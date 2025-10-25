export interface LoadingProps {
	className?: string
	caption?: string
	spinner?: string
	customSpinner?: React.ReactNode
	customAnimate?: 'spin' | 'pulse' | 'bounce' | 'ping'
	size?: 'sm' | 'md' | 'lg' | 'xl'
	layout?: 'col' | 'col_reverse' | 'row' | 'row_reverse'
	loadingColor?:
		| 'dark'
		| 'light'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'current'
}
