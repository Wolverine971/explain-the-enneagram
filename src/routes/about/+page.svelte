<script>
	import EmailSignup from '$lib/components/EmailSignup.svelte';
</script>

<svelte:head>
	<title>About - Explain the Enneagram</title>
	<meta
		name="description"
		content="Explain the Enneagram helps coaches, therapists, and facilitators teach the Enneagram with confidence."
	/>
	<link rel="canonical" href="https://www.explaintheenneagram.com/about" />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-4xl font-bold text-brand mb-8">About</h1>

	<div class="space-y-6 text-gray-700 leading-relaxed text-lg">
		<p>
			<strong>Explain the Enneagram</strong> exists for one reason: to help practitioners teach,
			coach, and facilitate the Enneagram with confidence.
		</p>

		<p>
			Whether you're a coach running your first Enneagram workshop, a therapist integrating
			personality frameworks into sessions, or an HR professional introducing the Enneagram to a
			team — this site is built for you.
		</p>

		<p>
			You won't find "What is your Enneagram type?" content here. Instead, you'll find coaching
			scripts, workshop frameworks, facilitation guides, and practical strategies for helping
			<em>others</em> understand the Enneagram.
		</p>

		<h2 class="text-2xl font-bold text-brand mt-10 mb-4">About the Author</h2>

		<p>
			I'm DJ Wayne. I've been deep into the Enneagram since 2017, written 100+
			articles about it, and explained it to just about everyone I know. I also created
			<a
				href="https://9takes.com"
				class="text-brand-accent hover:text-brand underline"
				target="_blank"
				rel="noopener">9takes.com</a
			>, a community platform where people explore personality through the Enneagram.
		</p>

		<p>
			This site is a different project with a different audience. Where 9takes helps individuals
			understand themselves, Explain the Enneagram helps practitioners get better at teaching and
			applying the system with clients, teams, and audiences.
		</p>
	</div>

	<div class="mt-16">
		<EmailSignup />
	</div>
</div>
