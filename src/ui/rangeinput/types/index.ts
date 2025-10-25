interface LabelProps {
	layout?: 'col' | 'row' | 'row_reverse'
	size?: 'md' | 'lg' | 'xl'
	label: string | React.ReactNode
	labelIsBold?: boolean
	required?: boolean
}

interface InputProps {
	name?: string
	min?: number
	max?: number
	defaultValue?: number
	step?: string
	title?: string
	hint?: boolean
	rangeActive?: string
	rangeBackground?: string
	thumbnailColor?: string
	thumbnailActiveColor?: string
	thumbnailShape?: 'circle' | 'square'
	onChange?: (value: number) => void
}

export interface RangeInputProps extends LabelProps, InputProps {
	className?: string
	style?: React.CSSProperties
	rounded?: boolean
}
