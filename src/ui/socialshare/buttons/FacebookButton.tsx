'use client'

import { FaFacebook } from 'react-icons/fa'
import { Button } from '../..'
import { FacebookButtonProps } from '../types'

const FacebookButton = ({ btnShape, size }: FacebookButtonProps) => {
	const handleShareClick = () => {
		const baseUrl = 'https://www.facebook.com/sharer/sharer.php'
		const shareUrl = new URL(baseUrl)

		shareUrl.searchParams.set('u', window.location.href)

		window.open(shareUrl.toString(), '_blank', 'noopener,noreferrer')
	}

	return (
		<Button
			onClick={handleShareClick}
			btnBackground='primary'
			btnColor='light'
			layout={btnShape}
			size={size}
			title='Share on Facebook'
			className='hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#1877F2]'
		>
			<FaFacebook />
			<span className='sr-only'>Share on Facebook</span>
		</Button>
	)
}

export default FacebookButton
