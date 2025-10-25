'use client'

import React from 'react'

import { AccordionSectionProps } from '../types'

const AccordionSection = ({ children }: AccordionSectionProps) => {
	return (
		<section
			className='accordion-section max-h-0 peer-[.open]:max-h-fit overflow-y-auto transition-all duration-500'
			role='group'
		>
			{children}
		</section>
	)
}

export default AccordionSection
