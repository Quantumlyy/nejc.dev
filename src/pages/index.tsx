import React from 'react';
import Link from 'next/link';
import LargeTitle from 'components/LargeTitle';
import Layout from 'layouts/Layout';
import type { NextPage } from 'next';

const Index: NextPage = () => {
	return (
		<Layout>
			<div className="flex">
				<Link href="/about" passHref>
					<a className="flex-1">About me</a>
				</Link>
				<p>TypeScript + React (NextJS) + Node.js</p>
			</div>
			<div className="flex flex-1">
				<div className="flex justify-center flex-col space-y-10">
					<LargeTitle>Nejc Drobnič</LargeTitle>
				</div>
			</div>
			{/* <div className="flex">
				<p>
					<Link href="/blog">Blog</Link>
				</p>
			</div> */}
		</Layout>
	);
};

export default Index;
