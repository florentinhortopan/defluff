<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Platform - Defluff</title>
	<meta name="description" content="A platform that turns media into knowledge and guided experiences. Defluff Engine, Knowledge Cards, Journey Builder, and more." />
</svelte:head>

<section class="section section-lg">
	<div class="container">
		<header class="page-header text-center container-narrow">
			<h1>A platform that turns media into knowledge and guided experiences.</h1>
			<p class="lead">
				Defluff is a modular platform that can operate as (1) a content intelligence engine, (2) a curation system, or (3) a full delivery layer for web, kiosk, and embedded experiences.
			</p>
		</header>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="modules-grid">
			<article class="module-card">
				<h2>Defluff Engine</h2>
				<p class="module-subtitle">Content Intelligence</p>
				<p>The Engine transforms raw media into structured outputs: topics, entities, segments, key moments, definitions, claims, summaries, and "what to remember." Each output is designed for editorial review and can be exported via API or files.</p>
			</article>
			
			<article class="module-card">
				<h2>Knowledge Cards</h2>
				<p class="module-subtitle">Reusable Building Blocks</p>
				<p>Knowledge Cards are reusable, governed building blocks: concepts, clips, definitions, evidence, and relationships. They are designed to move from analysis to delivery without losing traceability.</p>
			</article>
			
			<article class="module-card">
				<h2>Journey Builder</h2>
				<p class="module-subtitle">Guided Sequences</p>
				<p>Journey Builder assembles media and Knowledge Cards into guided sequences. Journeys can be educational modules, exhibit routes, thematic trails, or onboarding paths—each with rules for audience type, time available, and desired outcomes.</p>
			</article>
			
			<article class="module-card">
				<h2>Defluff Score</h2>
				<p class="module-subtitle">Quality & Density Signals</p>
				<p>Defluff Score helps teams identify clarity, density, novelty, and coherence. It supports quality governance across large libraries and mixed contributor ecosystems.</p>
			</article>
			
			<article class="module-card">
				<h2>Experience Layer</h2>
				<p class="module-subtitle">Web, Kiosk, Embed</p>
				<p>Defluff can deliver curated journeys as a branded web experience, a kiosk experience for exhibits, or an embedded overlay inside existing players.</p>
			</article>
			
			<article class="module-card">
				<h2>Measurement Layer</h2>
				<p class="module-subtitle">Analytics & Outcomes</p>
				<p>Defluff measures engagement at the segment level, across journeys, and by cohort. It supports continuous improvement and creates defensible reporting for stakeholders.</p>
			</article>
		</div>
	</div>
</section>

<section class="section">
	<div class="container container-narrow">
		<h2 class="text-center mb-lg">Integrations</h2>
		<p class="text-center">
			Defluff is designed to integrate with content libraries, LMS platforms, DAM systems, and exhibit delivery stacks through APIs and export formats.
		</p>
	</div>
</section>

<section class="section section-lg cta-section">
	<div class="container container-narrow text-center">
		<a href="/contact" class="btn btn-primary" on:click|preventDefault={() => goto('/contact')}>
			Request a demo
		</a>
	</div>
</section>

<style>
	.page-header {
		margin-bottom: var(--spacing-2xl);
	}

	.lead {
		font-size: clamp(1.125rem, 2.5vw, 1.25rem);
		color: var(--color-gray-700);
		margin-top: var(--spacing-lg);
	}

	.modules-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
	}

	.module-card {
		padding: var(--spacing-xl);
		border: 1px solid var(--color-gray-200);
		background-color: var(--color-white);
	}

	.module-card h2 {
		font-size: clamp(1.25rem, 2.5vw, 1.75rem);
		margin-bottom: var(--spacing-xs);
	}

	.module-subtitle {
		font-weight: 500;
		color: var(--color-gray-600);
		margin-bottom: var(--spacing-md);
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.cta-section {
		border-top: 1px solid var(--color-gray-200);
		padding-top: var(--spacing-2xl);
	}

	@media (min-width: 768px) {
		.modules-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>

