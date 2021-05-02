import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import 'styles/_App.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<div className="wrapper">
			<div className="contentMain">
				<div className="contentWrapper">
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
};

export default App;
