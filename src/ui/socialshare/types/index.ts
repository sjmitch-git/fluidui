export interface btnProps {
	btnShape?: 'rounded' | 'square' | 'circle'
	size?: 'md' | 'lg' | 'xl'
}

export type SocialShareButton =
	| 'X'
	| 'Facebook'
	| 'LinkedIn'
	| 'Slack'
	| 'WhatsApp'
	| 'Reddit'
	| 'Pinterest'
	| 'Telegram'
	| 'Email'
	| 'Bluesky'

export interface SocialShareProps extends btnProps {
	className?: string
	style?: React.CSSProperties
	layout?: 'horizontal' | 'vertical'
	text: string
	buttons: SocialShareButton[]
	gap?: 'none' | 'sm' | 'md' | 'lg'
	grayscale?: boolean
}

export interface XButtonProps extends btnProps {
	text: string
}

export interface WhatsAppButtonProps extends XButtonProps {}
export interface SlackButtonProps extends XButtonProps {}

export interface FacebookButtonProps extends btnProps {}
export interface LinkedInButtonProps extends btnProps {}
