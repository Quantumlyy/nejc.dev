import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
	public render() {
		return (
			<Html lang="en" prefix="og: https://ogp.me/ns#">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Space+Mono:wght@700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

	public static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
}

export default MyDocument;
