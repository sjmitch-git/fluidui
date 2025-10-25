export interface CheckboxProps {
	className?: string
	style?: React.CSSProperties
	size?: 'md' | 'lg' | 'xl'
	label: string
	labelIsBold?: boolean
	required?: boolean
	checked?: boolean
	name?: string
	rounded?: 'none' | 'full'
	hint?: React.ReactNode
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	suppressHydrationWarning?: boolean
}
