import React, { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

import { TickerProps } from './types'

const positions = {
	top: 'top-0',
	bottom: 'bottom-0',
}

const durations = {
	top: 'top-0',
	bottom: 'bottom-0',
}

const Ticker = ({
	position = 'bottom',
	duration = 50,
	className,
	style,
	children,
}: TickerProps) => {
	const positionClasses = useMemo(() => positions[position], [position])
	const tickerAnimation = {
		animation: `ticker-scroll ${duration}s linear infinite`,
	}

	return (
		<div
			className={twMerge(
				`ticker group overflow-hidden fixed left-0 w-full bg-dark dark:bg-light text-light dark:text-dark ${positionClasses}`,
				className
			)}
			style={style}
		>
			<div className='ticker-wrapper w-fit'>
				<ul
					className='ticker-items flex gap-4 items-center justify-center p-2'
					style={tickerAnimation}
				>
					{children}
				</ul>
			</div>
			<style>
				{`
                    @keyframes ticker-scroll {
                        0% {
                            transform: translate3d(100vw, 0, 0);
                        }
                        100% {
                            transform: translate3d(calc(-100% - 100vw), 0, 0);
                        }
                    }
                `}
			</style>
		</div>
	)
}

export default Ticker
