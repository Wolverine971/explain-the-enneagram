import type { Article } from './types';

export async function getArticles(): Promise<Article[]> {
	const paths = import.meta.glob('/src/content/articles/*.md', { eager: true });
	const articles: Article[] = [];

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Record<string, unknown>;
			const article: Article = {
				title: metadata.title as string,
				slug,
				description: metadata.description as string,
				date: metadata.date as string,
				tier: metadata.tier as number,
				category: metadata.category as string,
				published: metadata.published as boolean
			};

			if (article.published) {
				articles.push(article);
			}
		}
	}

	articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return articles;
}

export const tierLabels: Record<number, string> = {
	1: 'Foundations',
	2: 'Practitioner Frameworks',
	3: 'Advanced Integration',
	4: 'Tools & Resources'
};
