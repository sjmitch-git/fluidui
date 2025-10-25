import React from 'react'

const Dots = ({ width }: { width: number }) => {
	return (
		<div className={`spinner`}>
			<svg
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={width}
			>
				<circle
					cx='4'
					cy='12'
					r='3'
					fill='currentColor'
					className='opacity-50'
				>
					<animate
						id='spinner_qFRN'
						begin='0;spinner_OcgL.end+0.25s'
						attributeName='cy'
						calcMode='spline'
						dur='0.6s'
						values='12;6;12'
						keySplines='.33,.66,.66,1;.33,0,.66,.33'
					/>
				</circle>
				<circle
					cx='12'
					cy='12'
					r='3'
					fill='currentColor'
					className='opacity-75'
				>
					<animate
						begin='spinner_qFRN.begin+0.1s'
						attributeName='cy'
						calcMode='spline'
						dur='0.6s'
						values='12;6;12'
						keySplines='.33,.66,.66,1;.33,0,.66,.33'
					/>
				</circle>
				<circle
					cx='20'
					cy='12'
					r='3'
					fill='currentColor'
				>
					<animate
						id='spinner_OcgL'
						begin='spinner_qFRN.begin+0.2s'
						attributeName='cy'
						calcMode='spline'
						dur='0.6s'
						values='12;6;12'
						keySplines='.33,.66,.66,1;.33,0,.66,.33'
					/>
				</circle>
			</svg>
		</div>
	)
}

export default Dots
