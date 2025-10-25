export interface PasswordInputProps {
	size?: 'sm' | 'md' | 'lg' | 'xl'
	autocomplete?: 'new-password' | 'current-password'
	name?: string
	title?: string
	placeholder?: string
	pattern?: string
	className?: string
	disabled?: boolean
	hint?: boolean
	required?: boolean
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	onInputChange?: (input: string) => void
	rounded?: 'none' | 'md' | 'lg' | 'full'
	layout?: 'col' | 'row'
	label: string
	inputStyles?: string
}
