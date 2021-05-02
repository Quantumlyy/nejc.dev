import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import activityReducer from 'state/reducers/activity';

export const reducers = combineReducers({
	activity: activityReducer
});

export const store = createStore(reducers, composeWithDevTools({ trace: true })(applyMiddleware()));

export type RootState = ReturnType<typeof store.getState>;
