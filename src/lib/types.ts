export interface Article {
	title: string;
	slug: string;
	description: string;
	date: string;
	tier: number;
	category: string;
	published: boolean;
}

export interface MdsvexFile {
	default: import('svelte').Component;
	metadata: Record<string, string>;
}
