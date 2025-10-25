export interface StatBarProps {
	title?: string
	titleAlign?: 'left' | 'center' | 'right'
	titleWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
	titleSize?: 2 | 3 | 4 | 5
	labels: [string, string]
	showLabels?: boolean
	data: [number, number]
	colors?: [string, string]
	className?: string
	style?: React.CSSProperties
}
