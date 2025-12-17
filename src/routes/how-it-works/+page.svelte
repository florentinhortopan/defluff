<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>How It Works - Defluff</title>
	<meta name="description" content="Designed for clarity, governance, and scale. Learn how Defluff transforms media into structured knowledge and guided experiences." />
</svelte:head>

<section class="section section-lg">
	<div class="container">
		<header class="page-header text-center container-narrow">
			<h1>Designed for clarity, governance, and scale.</h1>
			<p class="lead">
				Defluff ingests content, segments it, extracts meaning into structured Knowledge Cards, assembles curated Journeys, delivers experiences across web/kiosk/embed, and measures engagement to continuously improve both curation and content quality.
			</p>
		</header>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="architecture-list">
			<article class="architecture-item">
				<h2>1) Ingestion</h2>
				<p>Defluff supports batch and incremental processing of media and documents, enabling both back-catalog conversion and ongoing updates.</p>
			</article>
			
			<article class="architecture-item">
				<h2>2) Understanding Layer</h2>
				<p>Defluff performs multi-step extraction: segmentation, topic modeling, entity resolution, claim detection, definition extraction, and takeaway generation—paired with confidence signals.</p>
			</article>
			
			<article class="architecture-item">
				<h2>3) Knowledge Layer</h2>
				<p>Structured Knowledge Cards are stored with relationships, enabling cross-collection intelligence and reuse across exhibits or curricula.</p>
			</article>
			
			<article class="architecture-item">
				<h2>4) Experience Layer</h2>
				<p>Journeys are delivered through a branded UI layer (web/kiosk/embed) with personalization rules.</p>
			</article>
			
			<article class="architecture-item">
				<h2>5) Measurement Layer</h2>
				<p>Defluff captures segment-level engagement, journey completion, replays, drop-offs, and cohort comparisons to inform continuous improvement.</p>
			</article>
		</div>
	</div>
</section>

<section class="section section-lg">
	<div class="container container-narrow">
		<h2 class="text-center mb-lg">Trust, Safety, and Governance</h2>
		
		<div class="governance-list">
			<div class="governance-item">
				<h3>Explainability</h3>
				<p>Defluff is designed to show "what was extracted" and "where it came from," so your team can audit, edit, and approve.</p>
			</div>
			
			<div class="governance-item">
				<h3>Human-in-the-loop</h3>
				<p>Defluff supports review workflows so editorial teams can approve outputs, lock canonical definitions, and create institution-grade narratives.</p>
			</div>
			
			<div class="governance-item">
				<h3>Provenance and traceability</h3>
				<p>Defluff can retain linkable provenance references to support trust and institutional accountability.</p>
			</div>
			
			<div class="governance-item">
				<h3>Audience modes</h3>
				<p>Defluff can support strict modes for education and youth contexts, enabling stronger filtering and curated experiences.</p>
			</div>
			
			<div class="governance-item">
				<h3>Brand and tone controls</h3>
				<p>Defluff can align output style with institutional language, reading level, and terminology.</p>
			</div>
		</div>
	</div>
</section>

<section class="section section-lg cta-section">
	<div class="container container-narrow text-center">
		<a href="/contact" class="btn btn-primary" on:click|preventDefault={() => goto('/contact')}>
			Get started
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

	.architecture-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
		max-width: 900px;
		margin: 0 auto;
	}

	.architecture-item {
		padding: var(--spacing-xl);
		border-left: 3px solid var(--color-black);
		background-color: var(--color-gray-50);
	}

	.architecture-item h2 {
		font-size: clamp(1.25rem, 2.5vw, 1.75rem);
		margin-bottom: var(--spacing-md);
	}

	.governance-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
	}

	.governance-item {
		padding: var(--spacing-lg);
		border: 1px solid var(--color-gray-200);
	}

	.governance-item h3 {
		font-size: clamp(1.125rem, 2.5vw, 1.5rem);
		margin-bottom: var(--spacing-sm);
	}

	.cta-section {
		border-top: 1px solid var(--color-gray-200);
		padding-top: var(--spacing-2xl);
	}

	@media (min-width: 768px) {
		.governance-list {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>

