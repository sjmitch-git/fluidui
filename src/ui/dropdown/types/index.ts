export interface LinksProps {
	href: string
	label: string
	links?: any[]
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: 'md' | 'lg' | 'xl'
	style?: React.CSSProperties
	className?: string
	links: LinksProps[]
	buttonLayout: 'circle' | 'square'
	buttonBackground?:
		| 'dark'
		| 'light'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'transparent'
	buttonColor?:
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
