import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { config } from '../config';
import PageWrapper from './PageWrapper';

const Etc = () => {
	const [t] = useTranslation();

	return (
		<PageWrapper>
			<h1>/etc</h1>
			<h2>{t('pages.etc.thanks')}</h2>
			<p>
				I did a rework of the basic <a href={'https://github.com/phineas/phineas.io'}>phineas/phineas.io</a> site and improved each component,{' '}
				thank you to him for this wonderful design and example which saved me a lot of time.
			</p>
			<p>
				The source code for this website is available at{' '}
				<a href={'https://github.com/QuantumlyTangled/quantumly.dev'}>quantumlytangled/quantumly.dev</a>.
			</p>
			<h2>{t('pages.etc.contact')}</h2>
			<p>
				I'm most responsive through Twitter DMs, you can{' '}
				<a href={`https://twitter.com/messages/compose?recipient_id=${config.twitterId}`}>click here</a> to DM me on Twitter.
			</p>
			<h2>{t('pages.etc.other')}</h2>
			<ul>
				<li>
					<Link to={'/presence'}>/presence</Link>
				</li>
				<li>
					{t('pages.etc.ethAddress')}: <code>0x1c5d3f08c244F7a684dC10d56C3b2a884C29ae8A</code>
				</li>
				<li>
					{t('pages.etc.bscAddress')}: <code>0xEfa20fbC58637dE44e3E3d74AB34348B48aFe2d4</code>
				</li>
			</ul>
		</PageWrapper>
	);
};

export default Etc;
