import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { StrictMode, useEffect } from 'react';
import { animations } from 'core/animations';
import 'styles/_App.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => {
	useEffect(() => {
		if (typeof window === 'undefined') return;
		void new Audio('/pop.mp3').play().catch(() => null);
	}, [router.pathname]);

	return (
		<StrictMode>
			<Head>
				<title>Nejc Drobnič</title>
			</Head>
			<div className="h-full bg-blur">
				<AnimatePresence exitBeforeEnter>
					<motion.div key={router.pathname} {...animations} className="h-full">
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</div>
		</StrictMode>
	);
};

export default App;
