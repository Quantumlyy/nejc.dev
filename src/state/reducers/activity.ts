import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../index';

export interface ActivityState {}

export const initialState: ActivityState = {};

export const activitySlice = createSlice({
	name: 'activity',
	initialState,
	reducers: {}
});

export const {} = activitySlice.actions;

export default activitySlice.reducer;
