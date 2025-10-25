'use client'

import { FaXTwitter } from 'react-icons/fa6'
import { Button } from '../..'
import { XButtonProps } from '../types'

const XButton = ({ text, btnShape, size }: XButtonProps) => {
	const handleShareClick = () => {
		const baseUrl = 'https://x.com/intent/tweet'
		const params = new URLSearchParams({
			text: text.replace(/(\r\n|\n|\r)/g, ' '),
			url: window.location.href,
		})

		const shareUrl = `${baseUrl}?${params.toString()}`
		window.open(shareUrl, '_blank', 'noopener,noreferrer')
	}

	return (
		<Button
			onClick={handleShareClick}
			btnBackground='primary'
			btnColor='light'
			layout={btnShape}
			size={size}
			title='Share on X'
			className='hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#000000]'
		>
			<FaXTwitter />
			<span className='sr-only'>Share on X</span>
		</Button>
	)
}

export default XButton
