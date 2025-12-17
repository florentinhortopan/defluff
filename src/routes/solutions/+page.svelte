<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Solutions - Defluff</title>
	<meta name="description" content="Defluff solutions for museums, exhibit organizers, educational companies, and public media platforms." />
</svelte:head>

<section class="section section-lg">
	<div class="container">
		<header class="page-header text-center container-narrow">
			<h1>Solutions</h1>
			<p class="lead">
				Defluff is built for organizations that need to curate at scale, protect trust, and prove outcomes.
			</p>
		</header>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="solutions-list">
			<article class="solution-card">
				<h2>Museums & Cultural Institutions</h2>
				<h3>What changes with Defluff</h3>
				<p>Defluff turns collections and media into curated, guided visitor journeys that continue after the visit—without diluting institutional rigor.</p>
				<h3>Typical deployments</h3>
				<p>A QR-driven exhibit layer, a kiosk mode for on-site experience, and a take-home recap that reinforces learning.</p>
				<h3>Why it matters</h3>
				<p>Museums increasingly compete for attention, but their advantage is depth. Defluff helps turn depth into experiences audiences actually complete and remember.</p>
			</article>
			
			<article class="solution-card">
				<h2>Exhibit Organizers & Experience Studios</h2>
				<h3>What changes with Defluff</h3>
				<p>Defluff provides a repeatable platform layer for building new exhibits faster: content becomes journeys, journeys become measurable outcomes, and every iteration makes the next launch easier.</p>
				<h3>Typical deployments</h3>
				<p>Multi-exhibit templates, dynamic route variations, engagement dashboards per day/time/segment, and audience-path optimization.</p>
			</article>
			
			<article class="solution-card">
				<h2>Educational Companies & Academies</h2>
				<h3>What changes with Defluff</h3>
				<p>Defluff transforms content libraries into governed learning modules. It reduces manual course operations while improving clarity and completion.</p>
				<h3>Typical deployments</h3>
				<p>Course content intelligence, lesson sequencing, knowledge cards for quizzes/assignments, and cohort analytics for iteration.</p>
				<h3>Why it matters</h3>
				<p>Better outcomes do not require more content. They require better structure, guidance, and measurement.</p>
			</article>
			
			<article class="solution-card">
				<h2>Public Media & Learning Platforms</h2>
				<h3>What changes with Defluff</h3>
				<p>Defluff adds an intelligence layer on top of existing media catalogs to create guided viewing experiences that increase retention, comprehension, and trust.</p>
			</article>
		</div>
	</div>
</section>

<section class="section section-lg cta-section">
	<div class="container container-narrow text-center">
		<a href="/contact" class="btn btn-primary" on:click|preventDefault={() => goto('/contact')}>
			Learn more
		</a>
	</div>
</section>

<style>
	.page-header {
		width: 100%;
		margin-bottom: var(--spacing-2xl);
	}

	.page-header.container-narrow {
		margin-left: auto;
		margin-right: auto;
	}

	.lead {
		font-size: clamp(1.125rem, 2.5vw, 1.25rem);
		color: var(--color-gray-700);
		margin-top: var(--spacing-lg);
	}

	.solutions-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-2xl);
		max-width: 900px;
		margin: 0 auto;
	}

	.solution-card {
		padding: var(--spacing-xl);
		border: 1px solid var(--color-gray-200);
		background-color: var(--color-white);
	}

	.solution-card h2 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		margin-bottom: var(--spacing-lg);
	}

	.solution-card h3 {
		font-size: clamp(1.125rem, 2.5vw, 1.25rem);
		margin-top: var(--spacing-lg);
		margin-bottom: var(--spacing-sm);
		color: var(--color-gray-800);
	}

	.solution-card p {
		margin-bottom: var(--spacing-md);
	}

	.cta-section {
		border-top: 1px solid var(--color-gray-200);
		padding-top: var(--spacing-2xl);
	}
</style>

