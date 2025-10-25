export interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
	open: boolean
	modal?: boolean
	showClose?: boolean
	onClose: () => void
	submit?: (e: React.FormEvent<HTMLFormElement>) => void
	title?: string
	titleSize?: 'sm' | 'md' | 'lg' | 'xl'
	closeBtnSize?: 'sm' | 'md' | 'lg' | 'xl'
	titleBold?: boolean
	children: React.ReactNode
}
