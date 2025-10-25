import React from 'react'

import { TabProps } from './types'

export const Tab = ({
	id,
	title,
	activeId,
	tabStyles = '',
	activeTabStyles = '',
	onClick,
}: TabProps) => {
	return (
		<button
			className={`tab w-full ${tabStyles} ${id === activeId ? activeTabStyles : ''}`}
			onClick={() => onClick(id)}
		>
			{title}
		</button>
	)
}
