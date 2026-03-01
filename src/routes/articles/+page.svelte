<script lang="ts">
	import { tierLabels } from '$lib/articles';

	let { data } = $props();
</script>

<svelte:head>
	<title>Articles - Explain the Enneagram</title>
	<meta
		name="description"
		content="Practical guides, frameworks, and coaching scripts for Enneagram practitioners."
	/>
	<link rel="canonical" href="https://www.explaintheenneagram.com/articles" />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="mb-10">
		<h1 class="text-4xl font-bold text-brand mb-4">Articles</h1>
		<p class="text-lg text-gray-600 max-w-2xl">
			Practical guides, frameworks, and coaching scripts to help you teach and apply the
			Enneagram with confidence.
		</p>
	</div>

	{#if data.articles.length === 0}
		<p class="text-gray-500 text-lg">Articles coming soon. Check back shortly.</p>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.articles as article}
				<a
					href="/articles/{article.slug}"
					class="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow no-underline group"
				>
					<div class="flex items-center gap-2 mb-3">
						<span
							class="text-xs font-semibold px-2 py-1 rounded-full bg-brand-light text-brand"
						>
							{tierLabels[article.tier] || 'Article'}
						</span>
						<span class="text-xs text-gray-400">
							{new Date(article.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'short',
								day: 'numeric'
							})}
						</span>
					</div>
					<h2 class="text-lg font-semibold text-gray-900 group-hover:text-brand mb-2">
						{article.title}
					</h2>
					<p class="text-gray-600 text-sm leading-relaxed">{article.description}</p>
				</a>
			{/each}
		</div>
	{/if}
</div>
