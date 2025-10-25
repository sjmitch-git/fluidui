export interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
	src: string
	alt: string
	caption?: string
	className?: string | undefined
	onClick?: () => void
	open: boolean
	theme?: 'light' | 'dark'
}
