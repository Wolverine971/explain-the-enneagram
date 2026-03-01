<script>
	import EmailSignup from '$lib/components/EmailSignup.svelte';
</script>

<svelte:head>
	<title>Resources - Explain the Enneagram</title>
	<meta
		name="description"
		content="Practical tools and resources for Enneagram coaches, therapists, and facilitators."
	/>
	<link rel="canonical" href="https://www.explaintheenneagram.com/resources" />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-4xl font-bold text-brand mb-4">Resources</h1>
	<p class="text-lg text-gray-600 mb-12">
		Practical tools for Enneagram practitioners. Certification guides, book recommendations,
		printable workshop materials, and more.
	</p>

	<div class="space-y-8">
		<div class="border border-gray-200 rounded-lg p-6">
			<h2 class="text-xl font-semibold text-brand mb-2">Coming Soon</h2>
			<p class="text-gray-600">
				We're building out a library of practical resources for Enneagram practitioners. Sign
				up for the email course below to be notified when new resources are available.
			</p>
		</div>
	</div>

	<div class="mt-16">
		<EmailSignup />
	</div>
</div>
