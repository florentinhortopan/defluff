<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Defluff - The Storytelling Intelligence Layer</title>
	<meta name="description" content="Defluff converts video, audio, and web content into structured, explainable knowledge and guided audience journeys—with analytics that help institutions improve learning and engagement." />
</svelte:head>

<!-- Hero Section -->
<section class="hero section-lg">
	<div class="container container-narrow text-center">
		<h1>The intelligence layer for modern storytelling.</h1>
		<p class="hero-subhead">
			Defluff converts video, audio, and web content into <strong>structured, explainable knowledge</strong> and <strong>guided audience journeys</strong>—with analytics that help institutions improve learning and engagement over time.
		</p>
		<div class="hero-cta">
			<a href="/contact" class="btn btn-primary" on:click|preventDefault={() => goto('/contact')}>
				Request a demo
			</a>
			<a href="/product" class="btn btn-secondary" on:click|preventDefault={() => goto('/product')}>
				Explore the platform
			</a>
		</div>
		<p class="credibility-strip">
			Built for <strong>museums, exhibit organizers, educational companies, and institutions</strong> that need clarity, trust, and measurable impact.
		</p>
	</div>
</section>

<!-- Problem → Promise -->
<section class="section">
	<div class="container container-narrow">
		<div class="problem-promise">
			<div class="problem-promise-item">
				<h2>The problem</h2>
				<p>Audiences are overwhelmed by volume, speed, and fragmented context. Institutions are asked to educate and inspire, but most media is not designed for retention, guidance, or outcomes.</p>
			</div>
			<div class="problem-promise-item">
				<h2>The promise</h2>
				<p>Defluff makes media <em>usable</em>. It extracts meaning, packages it into knowledge assets, and orchestrates journeys that feel curated, rigorous, and personal—without requiring your team to start from scratch.</p>
			</div>
		</div>
	</div>
</section>

<!-- Three Pillars -->
<section class="section section-lg">
	<div class="container">
		<h2 class="text-center mb-lg">What Defluff does</h2>
		<div class="pillars">
			<div class="pillar">
				<h3>1) Understand</h3>
				<p>Defluff analyzes content, segments it into moments, and surfaces topics, definitions, claims, and key takeaways with provenance.</p>
			</div>
			<div class="pillar">
				<h3>2) Curate</h3>
				<p>Defluff assembles content into guided sequences—lessons, exhibit routes, learning modules, or visitor "journeys"—tailored to your audience.</p>
			</div>
			<div class="pillar">
				<h3>3) Measure</h3>
				<p>Defluff captures engagement and learning signals to improve curation quality and justify outcomes to stakeholders.</p>
			</div>
		</div>
	</div>
</section>

<!-- Outcomes -->
<section class="section">
	<div class="container container-narrow">
		<h2 class="text-center mb-lg">Outcomes</h2>
		<p class="text-center">
			Defluff is designed to deliver outcomes institutions can defend, repeat, and scale: faster production cycles, consistent quality, stronger comprehension, higher engagement, and evidence for reporting, renewals, and funding narratives.
		</p>
	</div>
</section>

<!-- CTA Band -->
<section class="section section-lg cta-band">
	<div class="container container-narrow text-center">
		<p class="cta-text">
			<strong>Defluff is licensed as a platform—so your team can build repeatable storytelling systems, not one-off experiments.</strong>
		</p>
		<p class="cta-subtext">
			Request a demo to see how your content becomes journeys with measurable results.
		</p>
		<a href="/contact" class="btn btn-primary" on:click|preventDefault={() => goto('/contact')}>
			Request a demo
		</a>
	</div>
</section>

<style>
	.hero {
		text-align: center;
		padding-top: var(--spacing-3xl);
	}

	.hero h1 {
		margin-bottom: var(--spacing-lg);
	}

	.hero-subhead {
		font-size: clamp(1.125rem, 2.5vw, 1.25rem);
		line-height: 1.7;
		margin-bottom: var(--spacing-xl);
		color: var(--color-gray-700);
	}

	.hero-cta {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		align-items: center;
		margin-bottom: var(--spacing-xl);
	}

	.credibility-strip {
		font-size: 0.875rem;
		color: var(--color-gray-600);
		margin-top: var(--spacing-xl);
	}

	.problem-promise {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-2xl);
	}

	.problem-promise-item h2 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		margin-bottom: var(--spacing-md);
	}

	.pillars {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
	}

	.pillar {
		padding: var(--spacing-lg);
		border: 1px solid var(--color-gray-200);
	}

	.pillar h3 {
		font-size: clamp(1.25rem, 2.5vw, 1.5rem);
		margin-bottom: var(--spacing-md);
	}

	.cta-band {
		background-color: var(--color-gray-50);
		border-top: 1px solid var(--color-gray-200);
		border-bottom: 1px solid var(--color-gray-200);
	}

	.cta-text {
		font-size: clamp(1.125rem, 2.5vw, 1.5rem);
		margin-bottom: var(--spacing-md);
	}

	.cta-subtext {
		margin-bottom: var(--spacing-lg);
		color: var(--color-gray-600);
	}

	@media (min-width: 768px) {
		.hero-cta {
			flex-direction: row;
			justify-content: center;
		}

		.problem-promise {
			grid-template-columns: repeat(2, 1fr);
		}

		.pillars {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>

