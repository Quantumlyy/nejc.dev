import constate from 'constate';
import { useEffect, useMemo, useState } from 'react';
import type { Presence as LanyardPresence } from '../types/Lanyard';
import { EventType, Operation, SocketEvent } from '../types/LanyardSocket';

const logLanyardEvent = (eventName: string, data: unknown) => {
	console.log(
		`%cLanyard%c <~ ${eventName} %o`,
		'background-color: #d7bb87; border-radius: 5px; padding: 3px; color: #372910;',
		'background: none; color: #d7bb87;',
		data
	);
};

export const useLanyard = () => {
	const [presenceActive, setPresenceActive] = useState(false);
	const [socket, setSocket] = useState<WebSocket | null>(null);
	const [doing, setDoing] = useState<LanyardPresence>();

	const send = (op: Operation, d?: unknown): void => {
		if (socket !== null) socket.send(JSON.stringify({ op, d }));
	};

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		if (socket === null) return;

		socket.onmessage = ({ data }: MessageEvent): void => {
			const { op, t, d }: SocketEvent = JSON.parse(data);

			if (op === Operation.Hello) {
				setInterval(() => send(Operation.Heartbeat), (d as { heartbeat_interval: number }).heartbeat_interval);
				send(Operation.Initialize, { subscribe_to_id: '126321762483830785' });
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

	return { presenceActive, socket, doing };
};

export const [LanyardProvider, useLanyardContext] = constate(useLanyard);
