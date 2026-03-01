import type { RequestHandler } from './$types';

const site = 'https://www.explaintheenneagram.com';

async function getPublishedArticles() {
	const paths = import.meta.glob('/src/content/articles/*.md', { eager: true });
	const articles: { slug: string; date: string }[] = [];

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as { published: boolean; date: string };
			if (metadata.published) {
				articles.push({ slug, date: metadata.date });
			}
		}
	}

	return articles;
}

export const GET: RequestHandler = async () => {
	const articles = await getPublishedArticles();

	const staticPages = [
		{ path: '', priority: '1.0' },
		{ path: 'articles', priority: '0.8' },
		{ path: 'course', priority: '0.8' },
		{ path: 'about', priority: '0.5' },
		{ path: 'resources', priority: '0.5' }
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
	.map(
		(page) => `  <url>
    <loc>${site}/${page.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
${articles
	.map(
		(article) => `  <url>
    <loc>${site}/articles/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
	)
	.join('\n')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};

export const prerender = true;
