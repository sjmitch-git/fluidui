export interface AutocompleteProps {
	className?: string
	style?: React.CSSProperties
	size?: 'sm' | 'md' | 'lg' | 'xl'
	data: any[]
	list: string
	name?: string
	required?: boolean
	placeholder?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	autocomplete?: 'on' | 'off' | string
	label: string
	layout?: 'col' | 'row'
	rounded?: 'none' | 'md' | 'lg' | 'full'
	suppressHydrationWarning?: boolean
}
