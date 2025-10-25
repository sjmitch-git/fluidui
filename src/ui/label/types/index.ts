export interface LabelProps {
	className?: string
	style?: React.CSSProperties
	forId?: string
	layout?: 'col' | 'row' | 'row_reverse'
	size?: 'sm' | 'md' | 'lg' | 'xl'
	label: string | React.ReactNode
	isBold?: boolean
	value?: any
	required?: boolean
	children: React.ReactNode
	onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
	type?:
		| 'text'
		| 'password'
		| 'number'
		| 'email'
		| 'tel'
		| 'date'
		| 'checkbox'
		| 'radio'
		| 'file'
		| 'button'
		| 'color'
		| 'range'
		| 'search'
		| 'url'
		| 'datetime-local'
		| 'time'
		| 'month'
		| 'week'
}
