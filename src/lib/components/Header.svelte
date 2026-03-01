<script>
	let mobileOpen = $state(false);
</script>

<header class="bg-white border-b border-gray-200">
	<nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<a href="/" class="text-xl font-bold text-brand no-underline">
				Explain the Enneagram
			</a>

			<!-- Desktop nav -->
			<div class="hidden md:flex items-center gap-8">
				<a href="/articles" class="text-gray-600 hover:text-brand no-underline font-medium">
					Articles
				</a>
				<a href="/resources" class="text-gray-600 hover:text-brand no-underline font-medium">
					Resources
				</a>
				<a href="/about" class="text-gray-600 hover:text-brand no-underline font-medium">
					About
				</a>
				<a
					href="/course"
					class="bg-brand text-white px-4 py-2 rounded-md font-semibold hover:bg-brand-accent no-underline transition-colors"
				>
					Free Email Course
				</a>
			</div>

			<!-- Mobile hamburger -->
			<button
				class="md:hidden p-2"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if mobileOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{/if}
				</svg>
			</button>
		</div>

		<!-- Mobile menu -->
		{#if mobileOpen}
			<div class="md:hidden pb-4 flex flex-col gap-3">
				<a
					href="/articles"
					class="text-gray-600 hover:text-brand no-underline font-medium py-2"
					onclick={() => (mobileOpen = false)}
				>
					Articles
				</a>
				<a
					href="/resources"
					class="text-gray-600 hover:text-brand no-underline font-medium py-2"
					onclick={() => (mobileOpen = false)}
				>
					Resources
				</a>
				<a
					href="/about"
					class="text-gray-600 hover:text-brand no-underline font-medium py-2"
					onclick={() => (mobileOpen = false)}
				>
					About
				</a>
				<a
					href="/course"
					class="bg-brand text-white px-4 py-2 rounded-md font-semibold text-center no-underline"
					onclick={() => (mobileOpen = false)}
				>
					Free Email Course
				</a>
			</div>
		{/if}
	</nav>
</header>
