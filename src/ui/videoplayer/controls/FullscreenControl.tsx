import { Button } from '../..'

import { FaExpand, FaCompress } from 'react-icons/fa'

const FullscreenControl = (fullscreen: boolean, onFullscreen: any, duration: number) => {
	return (
		<div id='fullscreen'>
			<Button
				title={fullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
				onClick={onFullscreen}
				btnBackground='transparent'
				btnColor='light'
				size='sm'
				disabled={duration === 0}
			>
				{fullscreen ? <FaCompress /> : <FaExpand />}
				<span className='sr-only'>Toggle Fullscreen</span>
			</Button>
		</div>
	)
}

export default FullscreenControl
