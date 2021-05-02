import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSocket, setSocket } from '../state/reducers/activity';

const LanyardTrack: React.FC = ({ children }) => {
	const dispatch = useDispatch();
	const socket = useSelector(selectSocket);

	useEffect(() => {
		if (!socket) dispatch(setSocket(new WebSocket('wss://api.lanyard.rest/socket')));
	}, [dispatch, socket]);

	return <>{children}</>;
};

export default LanyardTrack;
