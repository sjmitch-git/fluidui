type PrismStyle = {
	[key: string]: React.CSSProperties
}

export interface MarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
	content: string
	prismStyle?: PrismStyle
	showLineNumbers?: boolean
	className?: string | undefined
}
