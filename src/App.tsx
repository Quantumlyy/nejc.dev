import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import { config } from './config';
import Etc from './pages/Etc';
import Home from './pages/Home';
import How from './pages/How';
import Presence from './pages/Presence';
import Where from './pages/Where';
import type { Presence as LanyardPresence } from './types/lanyard';
import { EventType, Operation, SocketEvent } from './types/lanyardSocket';

const logLanyardEvent = (eventName: string, data: unknown) => {
	console.log(
		`%cLanyard%c <~ ${eventName} %o`,
		'background-color: #d7bb87; border-radius: 5px; padding: 3px; color: #372910;',
		'background: none; color: #d7bb87;',
		data
	);
};

function App() {
	const [presenceActive, setPresenceActive] = useState(false);
	const [socket, setSocket] = useState<WebSocket | null>(null);
	const [doing, setDoing] = useState<LanyardPresence>();

	const send = (op: Operation, d?: unknown): void => {
		if (socket !== null) socket.send(JSON.stringify({ op, d }));
	};

	// @ts-expect-error Not all code paths return a value.
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		if (socket === null) return () => {};

		socket.onmessage = ({ data }: MessageEvent): void => {
			const { op, t, d }: SocketEvent = JSON.parse(data);

			if (op === Operation.Hello) {
				setInterval(() => send(Operation.Heartbeat), (d as { heartbeat_interval: number }).heartbeat_interval);
				send(Operation.Initialize, { subscribe_to_id: config.discordId });
			} else if (op === Operation.Event && t) {
				logLanyardEvent(t, d);

				if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t)) setDoing(d as LanyardPresence);
			}
		};

		socket.onclose = () => {
			setSocket(null);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socket]);

	useEffect(() => {
		if (!socket) setSocket(new WebSocket('wss://api.lanyard.rest/socket'));
	}, [socket]);

	const currentActivity = useMemo(() => doing?.activities.filter((activity) => activity.type === 0)[0], [doing]);

	useEffect(() => {
		// @ts-expect-error Argument of type 'true | Activity | undefined' is not assignable to parameter of type 'SetStateAction<boolean>'. Type 'undefined' is not assignable to type 'SetStateAction<boolean>'. ts(2345)
		setPresenceActive(doing?.listening_to_spotify || currentActivity);
	}, [doing, currentActivity]);

	return (
		<Wrapper>
			<MainContent>
				<Router>
					<Nav current={presenceActive} setActive={setPresenceActive} currentActivity={currentActivity} doing={doing} />

					<ContentWrapper>
						<AnimatePresence>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/where" component={Where} />
								<Route exact path="/how" component={How} />
								<Route exact path="/etc" component={Etc} />
								<Route exact path="/presence" render={(props) => <Presence {...props} doing={doing} />} />
							</Switch>
						</AnimatePresence>
					</ContentWrapper>
				</Router>
			</MainContent>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;

	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 0;
	}
`;

const MainContent = styled(motion.div)`
	height: 100vh;
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: row;
	overflow-y: auto;

	@media (max-width: 850px) {
		flex-direction: column;
		/* padding-top: 65px; */
	}
`;

const ContentWrapper = styled.div`
	margin-left: 15rem;
	padding: 2rem;
	width: 100%;
	box-sizing: border-box;
	font-size: 1rem;

	a {
		&:hover {
			text-decoration: underline;
		}
	}

	@media (max-width: 850px) {
		margin-left: 0px;
		padding-top: 65px;
	}
`;

export default App;
