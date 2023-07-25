import {config as dotenv} from 'dotenv';

// @ts-check

/** @type {import("next").NextConfig} */
const config = {
	env: dotenv(),

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'quantumly-cu-site-ndpersonal.b-cdn.net',
				pathname: '/*',
			},

			{
				protocol: 'https',
				hostname: 'snapshot.apple-mapkit.com',
				pathname: '/api/v1/snapshot',
			},
		],
	},

	async redirects() {
		return [
			{
				source: '/osdp',
				destination: 'https://github.com/Quantumlyy/osdp-rs',
				permanent: true,
			},
		];
	},
};

export default config;
