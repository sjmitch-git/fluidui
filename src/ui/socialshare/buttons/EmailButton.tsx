'use client'

import { MdEmail } from 'react-icons/md'
import { Button } from '../..'
import { XButtonProps } from '../types'

const EmailButton = ({ text, btnShape, size }: XButtonProps) => {
	const handleShareClick = () => {
		const subject = encodeURIComponent(document.title)
		const body = encodeURIComponent(`${text}\n\n${window.location.href}`)
		const mailtoUrl = `mailto:?subject=${subject}&body=${body}`
		window.open(mailtoUrl, '_blank', 'noopener,noreferrer')
	}

	return (
		<Button
			onClick={handleShareClick}
			btnBackground='info'
			btnColor='light'
			layout={btnShape}
			size={size}
			title='Share via Email'
			className='hover:opacity-80 focus:text-light focus-visible:outline-accent bg-[#0072C6]'
		>
			<MdEmail />
			<span className='sr-only'>Share via Email</span>
		</Button>
	)
}

export default EmailButton
