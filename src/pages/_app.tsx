import Nav from 'components/Nav';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import 'styles/_App.css';
import { LanyardProvider } from '../hooks/useLanyard';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<LanyardProvider>
			<Nav>
				<Component {...pageProps} />
			</Nav>
		</LanyardProvider>
	);
};

export default App;
