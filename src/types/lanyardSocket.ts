// Thanks to Tim (https://github.com/timcole/timcole.me/blob/%F0%9F%A6%84/components/lanyard.tsx) for the types

import { Presence } from './lanyard';

export enum Operation {
	Event,
	Hello,
	Initialize,
	Heartbeat
}

export enum EventType {
	INIT_STATE = 'INIT_STATE',
	PRESENCE_UPDATE = 'PRESENCE_UPDATE'
}

export interface SocketEvent {
	op: Operation;
	t?: EventType;
	d: Presence | unknown;
}
