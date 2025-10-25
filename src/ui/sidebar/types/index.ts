export interface SidebarProps {
	className?: string
	style?: React.CSSProperties
	children: React.ReactNode
	open: boolean
	backdrop?: boolean
	position?: 'left' | 'right'
	onClose: (open: boolean) => void
}
