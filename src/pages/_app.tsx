import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import 'styles/_App.css';
import { LanyardProvider } from '../hooks/useLanyard';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<LanyardProvider>
			<div className="wrapper">
				<div className="contentMain">
					<div className="contentWrapper">
						<Component {...pageProps} />
					</div>
				</div>
			</div>
		</LanyardProvider>
	);
};

export default App;
