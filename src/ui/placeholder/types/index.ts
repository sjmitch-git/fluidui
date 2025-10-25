interface BaseProps {
	className?: string
	style?: React.CSSProperties
}

export interface PlaceHolderProps extends BaseProps {
	width: string
	height?: string
	background?: string
	color?: string
	text?: string
	format?: 'png' | 'svg'
}
