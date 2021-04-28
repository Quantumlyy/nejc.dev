import type { Presence as LanyardPresence } from '../types/lanyard';
import PageWrapper from './PageWrapper';

const Presence = ({ doing }: { doing?: LanyardPresence }) => (
	<PageWrapper forceReadableWidth>
		<h1>
			<span role="img" aria-label="eyes">
				👀
			</span>{' '}
			Presence
		</h1>
		<p>
			You may have noticed that while I'm doing something like listening to Spotify, programming in VSCode or playing a game, it'll appear in
			the bottom left of my site. This is thanks to an open-source project called <a href={'https://github.com/phineas/lanyard'}>Lanyard</a>{' '}
			which pulls live presences from Discord and updates an API and WebSocket service. It takes {'<'}10 seconds to set up, you just have to
			join a Discord server!
		</p>
		<>
			{doing?.listening_to_spotify ? (
				<p>
					The song I'm currently listening to is called{' '}
					<a href={`https://open.spotify.com/track/${doing.spotify.track_id}`}>{doing.spotify.song}</a> by {doing.spotify.artist}
				</p>
			) : null}
		</>
	</PageWrapper>
);

export default Presence;
