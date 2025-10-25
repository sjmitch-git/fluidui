'use client'

import React, { useCallback, useState, useEffect, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import TabBar from './TabBar'
import { TabsProps, TabProps } from './types'

const defaultTabStyles = 'border border-transparent px-4 py-2 rounded-t w-full'
const defaultActiveTabStyles = 'border-x-neutral border-t-neutral bg-light dark:bg-dark'

const minimalTabStyles =
	'border-b-4 border-b-transparent px-4 py-2 dark:text-light hover:border-b-accent'
const minimalActiveTabStyles = '!border-b-info hover:cursor-default font-bold'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-xl',
	xl: 'text-2xl',
	xxl: 'text-4xl',
}

const Tabs = ({
	className = '',
	defaultActiveId = '',
	tabStyles = defaultTabStyles,
	activeTabStyles = defaultActiveTabStyles,
	icons,
	children,
	minimalTabs = false,
	contentBorder = false,
	tabSize = 'md',
	tabsPosition,
}: TabsProps) => {
	const [tabs, setTabs] = useState<TabProps[]>(null!)
	const [activeId, setActiveId] = useState<string>(defaultActiveId)
	const [nodes, setNodes] = useState<React.ReactNode[]>(null!)

	const content = useCallback(
		(contentRefNode: any) => {
			let arrTabs: any[] = []
			if (contentRefNode) {
				const buildTabs = (item: any, index: number) => {
					const tabObject = {
						id: item.id,
						key: item.id,
						title: icons ? icons[index] : item.title,
					}
					arrTabs.push(tabObject)
				}
				setTabs(arrTabs)
				const children = [...contentRefNode.children]
				setNodes(children)
				children.forEach(buildTabs)
			}
		},
		[icons]
	)

	useEffect(() => {
		const setDisplay = (item: HTMLElement) => {
			if (item.id === activeId) {
				item.classList.add('block')
				item.classList.remove('hidden')
			} else {
				item.classList.add('hidden')
				item.classList.remove('block')
			}
		}
		const setActive = (item: any) => setDisplay(item)
		if (activeId && nodes) nodes.forEach(setActive)
	}, [activeId, nodes])

	const handleClick = (id: string) => setActiveId(id)

	const sizeClasses = useMemo(() => sizes[tabSize], [tabSize])

	return (
		<div className={twMerge(`tabs mx-auto w-full ${minimalTabs ? 'minimal' : ''}`, className)}>
			<TabBar
				tabs={tabs}
				tabStyles={`${minimalTabs ? minimalTabStyles : tabStyles} ${sizeClasses}`}
				activeTabStyles={`${minimalTabs ? minimalActiveTabStyles : activeTabStyles} `}
				activeId={activeId}
				onClick={handleClick}
				tabsPosition={tabsPosition}
			/>
			<div
				ref={content}
				className={`tabwrapper bg-light dark:bg-dark p-0 ${
					contentBorder ? 'border rounded' : 'border-t'
				} border-neutral`}
			>
				{children}
			</div>
		</div>
	)
}

export default Tabs
