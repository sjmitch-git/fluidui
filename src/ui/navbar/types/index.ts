type colors = 'dark' | 'light' | 'info' | 'success' | 'warning' | 'danger' | 'primary' | 'secondary'

type ButtonColor = colors | 'current'
type ButtonBackground = colors | 'transparent'
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonLayout = 'rounded' | 'square' | 'circle'

export interface NavBarProps {
	navStyles?: string
	brand?: string
	brandSrc?: string
	brandStyles?: string
	links: NavLink[]
	linkStyles?: string
	btnBackground?: ButtonBackground
	btnColor?: ButtonColor
	btnLayout?: ButtonLayout
	btnSize?: ButtonSize
	children?: React.ReactNode
	onLinkClick?: (name: string) => void
	placement?: 'top' | 'bottom'
	prefetch?: boolean
}

export interface NavLinkProps {
	links: NavLink[]
	linkStyles?: string
	btnBackground?: ButtonBackground
	btnColor?: ButtonColor
	btnLayout?: ButtonLayout
	btnSize?: ButtonSize
	onLinkClick?: (name: string) => void
	placement?: 'top' | 'bottom'
	prefetch?: boolean
}

export interface NavBrandProps {
	brand?: string
	src?: string
	brandStyles?: string
	prefetch?: boolean
}

export interface NavLink {
	name: string
	href: string
}
