<script>
	let { compact = false } = $props();
</script>

<div class="bg-brand-light rounded-xl p-8 {compact ? '' : 'text-center'}">
	{#if !compact}
		<h2 class="text-2xl font-bold text-brand mb-2">
			The Practitioner's Guide to Explaining the Enneagram
		</h2>
		<p class="text-gray-600 mb-6 max-w-lg mx-auto">
			5 short emails. 5 lessons. Learn the common mistakes coaches make when explaining the
			Enneagram — and how to fix them.
		</p>
	{:else}
		<p class="font-semibold text-brand mb-4">
			Get the free 5-day email course for Enneagram practitioners.
		</p>
	{/if}

	<form
		method="POST"
		action="https://app.convertkit.com/forms/6714407/subscriptions"
		class="flex flex-col sm:flex-row gap-3 {compact ? '' : 'max-w-md mx-auto'}"
	>
		<input
			type="email"
			name="email_address"
			placeholder="Enter your email"
			aria-label="Enter your email"
			required
			class="flex-1 px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-brand-accent"
		/>
		<button
			type="submit"
			class="bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-accent transition-colors cursor-pointer whitespace-nowrap"
		>
			Get the free course
		</button>
	</form>
	<p class="text-xs text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
</div>
