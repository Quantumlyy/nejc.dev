import React from 'react';
import { useLastFM } from 'use-last-fm';
import { constants } from 'core/consts';
import Segment from 'components/Segment';

const Song: React.FC = () => {
	const lastFM = useLastFM(constants.lastFMUsername, constants.lastFMToken);

	if (lastFM.status !== 'playing') {
		return (
			<div className="glass p-5">
				<p>
					Not listening to anything...{' '}
					<span role="img" aria-label="Sadness">
						😞
					</span>
				</p>
			</div>
		);
	}

	return (
		<div className="glass p-5">
			<a href={lastFM.song.url} className="hover:underline">
				<span role="img" aria-label="Guitar">
					🎸
				</span>{' '}
				Listening to <Segment>{lastFM.song.name}</Segment> by <Segment>{lastFM.song.artist}</Segment> on <Segment>Spotify</Segment>
				{/* <Pulse /> */}
			</a>
		</div>
	);
};

export default Song;
