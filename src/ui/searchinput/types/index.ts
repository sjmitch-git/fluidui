export interface SearchInputProps extends React.HTMLAttributes<HTMLDivElement> {
	name?: string
	id?: string
	label?: string
	icon?: boolean
	className?: string
	style?: React.CSSProperties
	onButtonSubmit: (value: string) => void
	size?: 'sm' | 'md' | 'lg' | 'xl'
	placeholder?: string
	inputStyles?: string
	btnShape?: 'default' | 'square' | 'circle' | 'rounded'
	btnBackground?: 'dark' | 'light' | 'primary' | 'secondary' | 'transparent'
	btnColor?: 'dark' | 'light' | 'current'
	autocomplete?: 'off' | 'on'
	autocorrect?: 'on' | 'off'
	spellcheck?: boolean
	spacing?: '0' | '1' | '2'
	rounded?: 'none' | 'md' | 'lg' | 'full'
}
