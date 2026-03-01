<script lang="ts">
	import { tierLabels } from '$lib/articles';
	import EmailSignup from '$lib/components/EmailSignup.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - Explain the Enneagram</title>
	<meta name="description" content={data.meta.description} />
	<link
		rel="canonical"
		href="https://www.explaintheenneagram.com/articles/{data.meta.slug || ''}"
	/>

	<meta property="og:site_name" content="Explain the Enneagram" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<a
		href="/articles"
		class="text-sm text-brand-accent hover:text-brand no-underline mb-6 inline-block"
	>
		&larr; All Articles
	</a>

	<header class="mb-8">
		<div class="flex items-center gap-3 mb-4">
			{#if data.meta.tier}
				<span class="text-xs font-semibold px-2 py-1 rounded-full bg-brand-light text-brand">
					{tierLabels[Number(data.meta.tier)] || 'Article'}
				</span>
			{/if}
			<time class="text-sm text-gray-400">
				{new Date(data.meta.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
		</div>
		<h1 class="text-3xl sm:text-4xl font-bold text-brand leading-tight">{data.meta.title}</h1>
		{#if data.meta.description}
			<p class="text-lg text-gray-600 mt-4">{data.meta.description}</p>
		{/if}
	</header>

	<article class="prose">
		<data.content />
	</article>

	<div class="mt-16 border-t border-gray-200 pt-12">
		<EmailSignup />
	</div>
</div>
