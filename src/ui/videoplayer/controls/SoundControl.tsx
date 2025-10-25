import { Button } from '../..'

import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

const SoundControl = (
	muted: boolean,
	onMute: any,
	duration: number,
	volumeLevel: number,
	handleVolumeChange: any
) => {
	return (
		<div
			id='sound'
			className='flex gap-1 items-center'
		>
			<Button
				title={muted ? 'Unmute Sound' : 'Mute Sound'}
				onClick={onMute}
				btnBackground='transparent'
				btnColor='light'
				size='sm'
			>
				{muted ? <FaVolumeMute /> : <FaVolumeUp />}
				<span className='sr-only'>Toggle Mute Sound</span>
			</Button>
			<input
				type='range'
				min='0'
				max='10'
				step='1'
				value={volumeLevel}
				onChange={handleVolumeChange}
				className='volume-slider w-16 hidden lg:block'
				disabled={duration === 0}
			/>
		</div>
	)
}

export default SoundControl
