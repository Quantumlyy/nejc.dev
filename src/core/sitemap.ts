import { getAllPosts } from 'core/blog';
import sitemapGenerator from 'nextjs-sitemap-generator';
import path from 'path';

export async function generateSitemap(srcPath: string) {
	const baseUrl = 'https://quantumly.dev';
	const posts = getAllPosts(['slug']);

	await sitemapGenerator({
		baseUrl,
		extraPaths: posts.map(({ slug }) => `/blog/${slug}`),
		pagesDirectory: path.join(srcPath, 'pages'),
		targetDirectory: path.join(srcPath, 'public'),
		nextConfigPath: path.join(srcPath, 'next.config.js'),
		ignoredPaths: ['/blog/[slug]']
	});
}
