import { useLanyardContext } from 'hooks/useLanyard';
import type { NextPage } from 'next';
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const What: NextPage = () => {
	const { presenceActive } = useLanyardContext();

	return (
		<PageWrapper forceReadableWidth>
			<h1>{presenceActive ? 'yes' : 'no'}</h1>
			<h1>What I Do</h1>
			<p>17 y/o developer, designer, and innovator.</p>
		</PageWrapper>
	);
};

export default What;
