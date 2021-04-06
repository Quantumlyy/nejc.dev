import { Language } from './components/Repo';

export interface Repo {
	name: string;
	url: string;
	lang: Language;
	description: string;
}

export interface Config {
	discordId: string;
	twitterId: string;
	repos: Repo[];
}

export const config: Config = {
	discordId: '126321762483830785',
	twitterId: '3044781411',
	repos: [
		{
			name: 'Skyra',
			url: 'https://github.com/skyra-project/skyra',
			lang: Language.TypeScript,
			description: "All-in-one multipurpose Discord Bot designed to carry out most of your server's needs with great performance and stability."
		}
	]
};
