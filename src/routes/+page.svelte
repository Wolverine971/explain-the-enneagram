<script lang="ts">
	import { tierLabels } from '$lib/articles';
	import EmailSignup from '$lib/components/EmailSignup.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Explain the Enneagram - Teach, Coach, and Facilitate with Confidence</title>
	<meta
		name="description"
		content="Practical guides, coaching scripts, and workshop frameworks for Enneagram practitioners. Teach the Enneagram with confidence."
	/>
	<link rel="canonical" href="https://www.explaintheenneagram.com" />

	<meta property="og:site_name" content="Explain the Enneagram" />
	<meta
		property="og:title"
		content="Explain the Enneagram - Teach, Coach, and Facilitate with Confidence"
	/>
	<meta
		property="og:description"
		content="Practical guides, coaching scripts, and workshop frameworks for Enneagram practitioners."
	/>
	<meta property="og:url" content="https://www.explaintheenneagram.com" />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://www.explaintheenneagram.com/explain-enneagram.png"
	/>
	<meta property="og:image:type" content="image/png" />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-br from-brand to-brand-accent py-20 px-4">
	<div class="max-w-4xl mx-auto text-center">
		<h1 class="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
			Teach the Enneagram<br />with Confidence
		</h1>
		<p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
			Coaching scripts, workshop frameworks, and practical guides for coaches, therapists, and
			facilitators who use the Enneagram with clients and teams.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/articles"
				class="bg-white text-brand px-8 py-3 rounded-md font-semibold text-lg no-underline hover:bg-gray-100 transition-colors"
			>
				Read Articles
			</a>
			<a
				href="/course"
				class="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg no-underline hover:bg-white/10 transition-colors"
			>
				Free Email Course
			</a>
		</div>
	</div>
</section>

<!-- What this site is -->
<section class="py-16 px-4">
	<div class="max-w-4xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="text-center">
				<div class="text-3xl mb-3">&#x1f3af;</div>
				<h2 class="text-lg font-semibold text-brand mb-2">For Practitioners</h2>
				<p class="text-gray-600 text-sm">
					Content built for people who teach and apply the Enneagram — not just learn about
					it.
				</p>
			</div>
			<div class="text-center">
				<div class="text-3xl mb-3">&#x1f4cb;</div>
				<h2 class="text-lg font-semibold text-brand mb-2">Ready-to-Use Frameworks</h2>
				<p class="text-gray-600 text-sm">
					Coaching scripts, workshop outlines, and facilitation guides you can use today.
				</p>
			</div>
			<div class="text-center">
				<div class="text-3xl mb-3">&#x1f4a1;</div>
				<h2 class="text-lg font-semibold text-brand mb-2">Avoid Common Mistakes</h2>
				<p class="text-gray-600 text-sm">
					Learn what trips up most Enneagram educators and how to do it better.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Latest Articles -->
{#if data.latestArticles.length > 0}
	<section class="bg-gray-50 py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="flex justify-between items-center mb-8">
				<h2 class="text-2xl font-bold text-brand">Latest Articles</h2>
				<a
					href="/articles"
					class="text-brand-accent hover:text-brand no-underline font-medium text-sm"
				>
					View all &rarr;
				</a>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each data.latestArticles as article}
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
						<h3 class="text-lg font-semibold text-gray-900 group-hover:text-brand mb-2">
							{article.title}
						</h3>
						<p class="text-gray-600 text-sm leading-relaxed">{article.description}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- Email CTA -->
<section class="py-16 px-4">
	<div class="max-w-2xl mx-auto">
		<EmailSignup />
	</div>
</section>
