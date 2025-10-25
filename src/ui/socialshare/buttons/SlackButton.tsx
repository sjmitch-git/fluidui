'use client'

import { FaSlack } from 'react-icons/fa'
import { Button } from '../..'
import { SlackButtonProps } from '../types'

const SlackButton = ({ text, btnShape, size }: SlackButtonProps) => {
	const handleShareClick = () => {
		const baseUrl = 'https://slack.com/share'
		const shareUrl = new URL(baseUrl)

		shareUrl.searchParams.set('url', window.location.href)
		shareUrl.searchParams.set('text', text)

		window.open(shareUrl.toString(), '_blank', 'noopener,noreferrer')
	}

	return (
		<Button
			onClick={handleShareClick}
			btnBackground='primary'
			btnColor='light'
			layout={btnShape}
			size={size}
			title='Share on Slack'
			className='hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#4A154B]'
		>
			<FaSlack />
			<span className='sr-only'>Share on Slack</span>
		</Button>
	)
}

export default SlackButton
