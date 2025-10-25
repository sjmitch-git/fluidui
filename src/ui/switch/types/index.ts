export interface SwitchProps extends React.HTMLAttributes<HTMLElement> {
	name?: string
	label?: string
	labelIsBold?: boolean
	labelSize?: 'base' | 'lg' | 'xl'
	className?: string
	style?: React.CSSProperties
	switchOffContent?: string
	switchOnContent?: string
	switchOffColor?:
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'current'
		| 'neutral'
	switchOnColor?:
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'current'
		| 'neutral'
	thin?: boolean
	required?: boolean
	checked?: boolean
	defaultChecked?: boolean
	shape?: 'circle' | 'square'
	disabled?: boolean
	showHint?: boolean
	hint?: React.ReactNode
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
