export interface TextInputProps extends React.HTMLAttributes<HTMLLabelElement> {
	name?: string
	id?: string
	value?: string
	className?: string
	label: string
	layout?: 'col' | 'row'
	required?: boolean
	readonly?: boolean
	disabled?: boolean
	onInputChange?: (input: string) => void
	size?: 'sm' | 'md' | 'lg' | 'xl'
	title?: string
	hint?: boolean
	type?: 'text' | 'password' | 'email' | 'tel' | 'search' | 'url'
	placeholder?: string
	inputStyles?: string
	rounded?: 'none' | 'md' | 'lg' | 'full'
	pattern?: string
	autocomplete?:
		| 'off'
		| 'on'
		| 'name'
		| 'honorific-prefix'
		| 'given-name'
		| 'additional-name'
		| 'family-name'
		| 'honorific-suffix'
		| 'nickname'
		| 'username'
		| 'email'
		| 'username email'
		| 'new-password'
		| 'current-password'
		| 'one-time-code'
		| 'organization-title'
		| 'organization'
		| 'street-address'
		| 'address-line1'
		| 'address-line2'
		| 'address-line3'
		| 'address-level4'
		| 'address-level3'
		| 'address-level2'
		| 'address-level1'
		| 'country'
		| 'country-name'
		| 'postal-code'
		| 'cc-name'
		| 'cc-given-name'
		| 'cc-additional-name'
		| 'cc-family-name'
		| 'cc-number'
		| 'cc-exp'
		| 'cc-exp-month'
		| 'cc-exp-year'
		| 'cc-csc'
		| 'cc-type'
		| 'transaction-currency'
		| 'transaction-amount'
		| 'language'
		| 'bday'
		| 'bday-day'
		| 'bday-month'
		| 'bday-year'
		| 'sex'
		| 'url'
		| 'tel'
}
