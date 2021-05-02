import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import type { Presence } from 'types/Lanyard';

export interface ActivityState {
	active: boolean;
	socket: WebSocket | null;
	doing: Presence | null;
}

export const initialState: ActivityState = {
	active: false,
	socket: null,
	doing: null
};

export const activitySlice = createSlice({
	name: 'activity',
	initialState,
	reducers: {
		setActive: (state, action: PayloadAction<boolean>) => {
			state.active = action.payload;
		},
		setSocket: (state, action: PayloadAction<WebSocket>) => {
			state.socket = action.payload;
		},
		setDoing: (state, action: PayloadAction<Presence>) => {
			state.doing = action.payload;
		}
	}
});

export const { setActive, setSocket, setDoing } = activitySlice.actions;

export const selectActive = (state: RootState): boolean => state.activity.active;
export const selectSocket = (state: RootState): WebSocket | null => state.activity.socket;
export const selectDoing = (state: RootState): Presence | null => state.activity.doing;

export default activitySlice.reducer;
