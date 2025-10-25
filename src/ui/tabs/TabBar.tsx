'use client'

import React, { useMemo } from 'react'

import { Tab } from './Tab'
import { Spinner } from '..'
import { TabBarProps } from './types'

const tabsPositionStyles = {
	left: 'justify-start',
	center: 'justify-center',
	right: 'justify-end',
	full: 'justify-stretch',
}

const TabBar = ({
	tabs,
	onClick,
	activeId,
	tabStyles = '',
	activeTabStyles = '',
	tabsPosition = 'center',
}: TabBarProps) => {
	const positionClasses = useMemo(() => tabsPositionStyles[tabsPosition], [tabsPosition])

	return (
		<nav className='tabbar'>
			{tabs ? (
				<ul className={`tablist flex -mb-[1px] ${positionClasses}`}>
					{tabs.map((tab) => (
						<li
							key={tab.id}
							className={`${tabsPosition === 'full' ? 'flex-grow' : ''}`}
						>
							<Tab
								id={tab.id}
								title={tab.title}
								activeId={activeId}
								tabStyles={tabStyles}
								activeTabStyles={activeTabStyles}
								onClick={onClick}
							/>
						</li>
					))}
				</ul>
			) : (
				<div className='mb-4 w-full flex justify-center text-info'>
					<div className='w-12'>
						<Spinner />
					</div>
				</div>
			)}
		</nav>
	)
}

export default TabBar
