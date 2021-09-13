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
				I did a rework of the basic <a href={'https://github.com/phineas/phineas.io'}>phineas/phineas.io</a> site and improved each component.
				I would like to thank him for this wonderful design and example which saved me a lot of time.
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
					{t('pages.etc.ethAddress')}: <code>quantumly.eth</code> (<code>0xf82d0ea7A2eDde6d30cAf8A1E6Fed09f726fD584</code>)
				</li>
				<li>
					{t('pages.etc.bscAddress')}: <code>0xf82d0ea7A2eDde6d30cAf8A1E6Fed09f726fD584</code>
				</li>
			</ul>
		</PageWrapper>
	);
};

export default Etc;
