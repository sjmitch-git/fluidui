import React from 'react'

const SpinDots = ({ width }: { width: number }) => {
	return (
		<div className={`spinner`}>
			<svg
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={width}
			>
				<g>
					<circle
						cx='3'
						cy='12'
						r='2'
						stroke='currentColor'
						fill='currentColor'
					/>
					<circle
						cx='21'
						cy='12'
						r='2'
						stroke='currentColor'
						fill='currentColor'
					/>
					<circle
						cx='12'
						cy='21'
						r='2'
						stroke='currentColor'
						fill='currentColor'
					/>
					<circle
						cx='12'
						cy='3'
						r='2'
						stroke='currentColor'
						fill='currentColor'
					/>
					<circle
						cx='5.64'
						cy='5.64'
						r='2'
						stroke='currentColor'
						fill='currentColor'
					/>
					<circle
						cx='18.36'
						cy='18.36'
						r='2'
						stroke='currentColor'
						fill='currentColor'
					/>
					<circle
						cx='5.64'
						cy='18.36'
						r='2'
						stroke='currentColor'
						fill='currentColor'
					/>
					<circle
						cx='18.36'
						cy='5.64'
						r='2'
						stroke='currentColor'
						fill='currentColor'
					/>
					<animateTransform
						attributeName='transform'
						type='rotate'
						dur='2.5s'
						values='0 12 12;360 12 12'
						repeatCount='indefinite'
					/>
				</g>
			</svg>
		</div>
	)
}

export default SpinDots
