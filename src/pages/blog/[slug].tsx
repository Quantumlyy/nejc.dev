import rehypePrism from '@mapbox/rehype-prism';
import { data } from 'autoprefixer';
import { getAllPosts, getPostBySlug, Post } from 'core/blog';
import Layout from 'layouts/Layout';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import type { MdxRemote } from 'next-mdx-remote/types';
import Link from 'next/link';
import 'prism-themes/themes/prism-coldark-dark.css';
import React from 'react';

interface SlugProps {
	post: Post;
	content: MdxRemote.Source;
}

const Slug: NextPage<SlugProps> = ({ post, content: mdxContent }) => {
	const content = hydrate(mdxContent);

	return (
		<div className="bg-gray-900 bg-opacity-50 h-full">
			<Layout>
				<Link href="/blog">Back</Link>
				<div className="mt-20">
					<h1 className="text-6xl text-center md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-5">
						{post.title}
					</h1>

					<div className="mt-44 max-w-3xl p-10 mx-auto prose prose-dark glass rounded-lg">{content}</div>
				</div>
			</Layout>
		</div>
	);
};

export const getStaticProps: GetStaticProps<SlugProps> = async (ctx) => {
	const post = getPostBySlug(ctx.params?.slug as string, ['title', 'excerpt', 'author', 'content', 'cover', 'slug', 'tags', 'language']);

	const mdxSource = await renderToString(post.content, {
		scope: data,
		mdxOptions: {
			remarkPlugins: [require('remark-autolink-headings'), require('remark-slug'), require('remark-code-titles')],
			rehypePlugins: [rehypePrism]
		}
	});

	return {
		props: {
			post,
			content: mdxSource
		},
		revalidate: 120
	};
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map((post) => {
			return { params: { slug: post.slug } };
		}),
		fallback: 'blocking'
	};
};

export default Slug;