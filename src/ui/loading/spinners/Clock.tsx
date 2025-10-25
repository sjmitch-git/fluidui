import React from 'react'

const Clock = ({ width }: { width: number }) => {
	return (
		<div className={`spinner`}>
			<svg
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={width}
			>
				<path
					d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z'
					fill='currentColor'
					className='opacity-50'
				/>
				<rect
					x='11'
					y='6'
					rx='1'
					width='2'
					height='7'
					fill='currentColor'
				>
					<animateTransform
						attributeName='transform'
						type='rotate'
						dur='9s'
						values='0 12 12;360 12 12'
						repeatCount='indefinite'
					/>
				</rect>
				<rect
					x='11'
					y='11'
					rx='1'
					width='2'
					height='9'
					fill='currentColor'
					className='opacity-75'
				>
					<animateTransform
						attributeName='transform'
						type='rotate'
						dur='0.75s'
						values='0 12 12;360 12 12'
						repeatCount='indefinite'
					/>
				</rect>
			</svg>
		</div>
	)
}

export default Clock
