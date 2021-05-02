import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'state';
import 'styles/_App.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<ReduxProvider store={store}>
			<Component {...pageProps} />
		</ReduxProvider>
	);
};

export default App;