import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../content/articles/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch {
		throw error(404, `Article not found: ${params.slug}`);
	}
}
