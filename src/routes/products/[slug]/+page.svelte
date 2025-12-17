<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	
	export let data: PageData;
	const { product } = data;
</script>

<svelte:head>
	<title>{product.name} - Defluff</title>
	<meta name="description" content={product.description} />
</svelte:head>

<section class="section section-lg">
	<div class="container container-narrow">
		<a href="/products" class="back-link" on:click|preventDefault={() => goto('/products')}>
			← Back to Products
		</a>
		
		<header class="product-header">
			<h1>{product.name}</h1>
			<p class="product-tagline">{product.tagline}</p>
		</header>
		
		<div class="product-content">
			<div class="product-section">
				<h2>Overview</h2>
				<p>{product.description}</p>
			</div>
			
			<div class="product-section">
				<h2>Features</h2>
				<ul class="feature-list">
					{#each product.features as feature}
						<li>{feature}</li>
					{/each}
				</ul>
			</div>
			
			<div class="product-section">
				<h2>Capabilities</h2>
				<ul class="feature-list">
					{#each product.capabilities as capability}
						<li>{capability}</li>
					{/each}
				</ul>
			</div>
		</div>
		
		<div class="product-cta">
			<a href="/contact" class="btn btn-primary" on:click|preventDefault={() => goto('/contact')}>
				Get in touch
			</a>
		</div>
	</div>
</section>

<style>
	.back-link {
		display: inline-block;
		margin-bottom: var(--spacing-lg);
		font-size: 0.875rem;
		color: var(--color-gray-600);
		text-decoration: none;
	}

	.back-link:hover {
		color: var(--color-black);
	}

	.product-header {
		margin-bottom: var(--spacing-2xl);
	}

	.product-header h1 {
		margin-bottom: var(--spacing-md);
	}

	.product-tagline {
		font-size: clamp(1.125rem, 2.5vw, 1.5rem);
		color: var(--color-gray-700);
		font-weight: 500;
	}

	.product-content {
		margin-bottom: var(--spacing-2xl);
	}

	.product-section {
		margin-bottom: var(--spacing-xl);
	}

	.product-section h2 {
		font-size: clamp(1.25rem, 2.5vw, 1.75rem);
		margin-bottom: var(--spacing-md);
	}

	.feature-list {
		list-style: none;
		padding: 0;
	}

	.feature-list li {
		padding: var(--spacing-sm) 0;
		padding-left: var(--spacing-lg);
		position: relative;
		color: var(--color-gray-700);
	}

	.feature-list li::before {
		content: '—';
		position: absolute;
		left: 0;
		color: var(--color-black);
	}

	.product-cta {
		text-align: center;
		padding-top: var(--spacing-xl);
		border-top: 1px solid var(--color-gray-200);
	}
</style>

