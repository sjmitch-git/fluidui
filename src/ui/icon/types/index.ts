export interface IconProps {
	iconName?: string
	iconId?: string
	iconSize?: number
	iconColor?: string
	iconStyle?: 'color' | 'fluency'
	flipX?: boolean
	flipY?: boolean
	rotate?: 'none' | '45' | '90' | '135' | '180' | '225' | '270' | '315'
	altText?: string
	className?: string
	style?: React.CSSProperties
}
