import { getAllPosts } from 'core/blog';
import { Feed } from 'feed';
import fs from 'fs';
import path from 'path';

export function generateRssFeed(publicPath: string) {
	const baseUrl = 'https://quantumly.dev';
	const date = new Date();
	const posts = getAllPosts(['title', 'excerpt', 'author', 'cover', 'slug', 'date']);

	const feed = new Feed({
		title: "Nejc's Blog",
		id: baseUrl,
		link: baseUrl,
		language: 'en',
		copyright: `All rights reserved ${date.getFullYear()}, Nejc Drobnič`,
		updated: date,
		generator: 'Next.js using Feed for Node.js',
		feedLinks: {
			rss2: `${baseUrl}/rss/feed.xml`,
			json: `${baseUrl}/rss/feed.json`,
			atom: `${baseUrl}/rss/atom.xml`
		},
		author: posts[0]?.author
	});

	posts.forEach((post) => {
		const url = `${baseUrl}/blog/${post.slug}`;
		feed.addItem({
			title: post.title,
			id: url,
			link: url,
			description: post.excerpt,
			author: [post.author],
			image: `${baseUrl}${post.cover}`,
			date: new Date(post.date)
		});
	});

	const rssPath = path.join(publicPath, 'rss');

	fs.mkdirSync(rssPath, { recursive: true });
	fs.writeFileSync(path.join(rssPath, 'feed.xml'), feed.rss2());
	fs.writeFileSync(path.join(rssPath, 'atom.xml'), feed.atom1());
	fs.writeFileSync(path.join(rssPath, 'feed.json'), feed.json1());
}
