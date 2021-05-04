import type { DefaultSeoProps as DefaultSeoPropsType } from 'next-seo';

export const BaseUrl = 'https://quantumly.dev';
export const DefaultSEOProps: DefaultSeoPropsType = {
	titleTemplate: 'Nejc Drobnič | %s',
	title: 'Home',
	description: 'Nejc Drobnič, Full–stack TypeScript engineer from Slovenia',
	canonical: BaseUrl,
	openGraph: {
		title: 'Nejc Drobnič',
		url: BaseUrl,
		type: 'website',
		locale: 'en_GB',
		site_name: 'Nejc',
		profile: {
			firstName: 'Nejc',
			lastName: 'Drobnič',
			gender: 'male',
			username: 'quantumly'
		}
	},
	twitter: {
		handle: '@quantumlytngld',
		site: '@quantumlytngld',
		cardType: 'summary'
	}
};
