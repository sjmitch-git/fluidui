export interface DataTableProps {
	data: any[]
	ignore?: string[]
	caption?: string
	dividersX?: boolean
	dividersY?: boolean
	sortable?: boolean
	className?: string
	style?: React.CSSProperties
}
