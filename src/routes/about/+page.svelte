<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>About - Defluff</title>
	<meta name="description" content="Defluff builds tools that make media useful. Learn about our mission and the story behind Defluff." />
</svelte:head>

<section class="section section-lg">
	<div class="container container-narrow">
		<header class="page-header text-center">
			<h1>Defluff builds tools that make media useful.</h1>
		</header>
		
		<div class="content">
			<div class="content-section">
				<h2>Mission</h2>
				<p>Help institutions convert attention into understanding, and understanding into action—without compromising trust.</p>
			</div>
			
			<div class="content-section">
				<h2>What we believe</h2>
				<p>The next era of storytelling is not about more content; it's about better structure, guided experiences, and measurable outcomes. We build systems that respect editorial control, provenance, and institutional integrity while enabling speed and modern engagement.</p>
			</div>
			
			<div class="content-section">
				<h2>The Puxa origin</h2>
				<p>Defluff began as Puxa.ai, exploring how people could "defluff" social media and transform inspiration into action. Defluff carries that core idea into the institutional world, where clarity, governance, and outcomes matter most.</p>
			</div>
		</div>
	</div>
</section>

<section class="section section-lg cta-section">
	<div class="container container-narrow text-center">
		<a href="/contact" class="btn btn-primary" on:click|preventDefault={() => goto('/contact')}>
			Get in touch
		</a>
	</div>
</section>

<style>
	.page-header {
		margin-bottom: var(--spacing-2xl);
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xl);
	}

	.content-section {
		padding-bottom: var(--spacing-xl);
		border-bottom: 1px solid var(--color-gray-200);
	}

	.content-section:last-child {
		border-bottom: none;
	}

	.content-section h2 {
		font-size: clamp(1.25rem, 2.5vw, 1.75rem);
		margin-bottom: var(--spacing-md);
	}

	.cta-section {
		border-top: 1px solid var(--color-gray-200);
		padding-top: var(--spacing-2xl);
	}
</style>

