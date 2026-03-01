import { getArticles } from '$lib/articles';

export async function load() {
	const articles = await getArticles();
	return { latestArticles: articles.slice(0, 6) };
}
