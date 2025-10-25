export interface DrawerProps {
	className?: string // Optional CSS class for styling
	style?: React.CSSProperties // Inline styles
	children: React.ReactNode // Content inside the drawer
	open: boolean // Controls drawer open state
	backdrop?: boolean // Enables backdrop overlay
	position?: 'top' | 'bottom' // Sets drawer position
	onClose: (open: boolean) => void // Callback for closing the drawer
}
