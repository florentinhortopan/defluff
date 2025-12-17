<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Contact - Defluff</title>
	<meta name="description" content="Talk to Defluff Partnerships. Get in touch about licensing, demos, and partnerships." />
</svelte:head>

<section class="section section-lg">
	<div class="container container-narrow">
		<header class="page-header text-center">
			<h1>Talk to Defluff Partnerships</h1>
			<p class="lead">
				If you are a museum, exhibit organizer, educational company, or institution exploring a licensed platform for modern storytelling and measurable engagement, we'd love to learn about your content and your goals.
			</p>
		</header>
		
		<div class="contact-info">
			<div class="contact-item">
				<h2>Partnerships</h2>
				<p>
					<a href="mailto:partnerships@defluff.ai">partnerships@defluff.ai</a>
				</p>
			</div>
			
			<div class="contact-item">
				<h2>Press</h2>
				<p>
					<a href="mailto:press@defluff.ai">press@defluff.ai</a>
				</p>
			</div>
			
			<div class="contact-item">
				<h2>General</h2>
				<p>
					<a href="mailto:hello@defluff.ai">hello@defluff.ai</a>
				</p>
			</div>
		</div>
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

	.contact-info {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
		margin-top: var(--spacing-2xl);
	}

	.contact-item {
		padding: var(--spacing-xl);
		border: 1px solid var(--color-gray-200);
		text-align: center;
	}

	.contact-item h2 {
		font-size: clamp(1.125rem, 2.5vw, 1.5rem);
		margin-bottom: var(--spacing-md);
	}

	.contact-item a {
		font-size: 1.125rem;
		color: var(--color-black);
		text-decoration: none;
	}

	.contact-item a:hover {
		text-decoration: underline;
	}

	@media (min-width: 768px) {
		.contact-info {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>

