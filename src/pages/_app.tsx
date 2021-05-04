import { animations } from 'core/animations';
import { DefaultSEOProps } from 'DefaultSEOProps';
import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { StrictMode, useEffect } from 'react';
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
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta httpEquiv="Expires" content="1y" />
				<meta httpEquiv="Pragma" content="1y" />
				<meta httpEquiv="Cache-Control" content="1y" />
			</Head>
			<DefaultSeo {...DefaultSEOProps} />

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
