import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

void i18n
	.use(initReactI18next)
	.use(Backend)
	.init({
		lng: 'en',
		interpolation: {
			escapeValue: false
		},
		react: {
			// TODO: create suspense animation
			useSuspense: false
		}
	});

export default i18n;
