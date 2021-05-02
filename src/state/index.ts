import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

export const reducers = combineReducers({});

export const store = createStore(reducers, composeWithDevTools({ trace: true })(applyMiddleware()));

export type RootState = ReturnType<typeof store.getState>;
