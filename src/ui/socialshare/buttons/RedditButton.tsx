'use client'

import { FaRedditAlien } from 'react-icons/fa'
import { Button } from '../..'
import { XButtonProps } from '../types'

const RedditButton = ({ text, btnShape, size }: XButtonProps) => {
	const handleShareClick = () => {
		const baseUrl = 'https://www.reddit.com/submit'
		const params = new URLSearchParams({
			title: text.replace(/(\r\n|\n|\r)/g, ' '),
			url: window.location.href,
		})

		const shareUrl = `${baseUrl}?${params.toString()}`
		window.open(shareUrl, '_blank', 'noopener,noreferrer')
	}

	return (
		<Button
			onClick={handleShareClick}
			btnBackground='danger'
			btnColor='light'
			layout={btnShape}
			size={size}
			title='Share on Reddit'
			className='hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#FF4500]'
		>
			<FaRedditAlien />
			<span className='sr-only'>Share on Reddit</span>
		</Button>
	)
}

export default RedditButton
