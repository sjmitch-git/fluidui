export interface InputProps {
	size?: 'sm' | 'md' | 'lg' | 'xl'
	type?:
		| 'text'
		| 'password'
		| 'number'
		| 'email'
		| 'tel'
		| 'date'
		| 'datetime-local'
		| 'checkbox'
		| 'radio'
		| 'file'
		| 'color'
		| 'range'
		| 'search'
		| 'url'
		| 'time'
		| 'month'
		| 'week'
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
		| string
	name?: string
	id?: string
	title?: string
	ariaLabel?: string
	placeholder?: string
	list?: string
	pattern?: string
	className?: string
	style?: React.CSSProperties
	disabled?: boolean
	hint?: boolean
	hidden?: boolean
	required?: boolean
	readonly?: boolean
	tabindex?: number
	min?: string | number
	max?: string | number
	maxLength?: number
	minLength?: number
	step?: string
	accept?: string
	multiple?: boolean
	value?: number | string
	checked?: boolean
	defaultChecked?: boolean
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	onInput?: React.ChangeEventHandler<HTMLInputElement>
	onFocus?: React.ChangeEventHandler<HTMLInputElement>
	onBlur?: React.ChangeEventHandler<HTMLInputElement>
	autocorrect?: 'on' | 'off'
	spellcheck?: boolean
	rounded?: 'none' | 'md' | 'lg' | 'full'
	suppressHydrationWarning?: boolean
}
