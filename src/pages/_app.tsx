import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'state';
import LanyardTrack from 'components/LanyardTrack';
import 'styles/_App.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<ReduxProvider store={store}>
			<LanyardTrack>
				<div className="wrapper">
					<div className="contentMain">
						<div className="contentWrapper">
							<Component {...pageProps} />
						</div>
					</div>
				</div>
			</LanyardTrack>
		</ReduxProvider>
	);
};

export default App;
