interface BadgeProps {
	badge?: React.ReactNode
	badgeBackground?: 'dark' | 'light' | 'info' | 'success' | 'warning' | 'danger' | 'transparent'
	badgeColor?: 'dark' | 'light' | 'info' | 'success' | 'warning' | 'danger'
}

export interface AlertProps extends BadgeProps {
	className?: string
	style?: React.CSSProperties
	title?: string
	status?: 'info' | 'success' | 'warning' | 'error'
	message: string
	layout?: 'default' | 'solid' | 'outline'
	onClick?: (e: any) => void
	dismissable?: boolean
	rounded?: 'none' | 'md' | 'lg'
}
