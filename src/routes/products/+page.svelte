<script lang="ts">
	import { products } from '$lib/stores/products';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Products - Defluff</title>
	<meta name="description" content="Explore Defluff products and capabilities for transforming media into structured knowledge." />
</svelte:head>

<section class="section section-lg">
	<div class="container">
		<h1 class="text-center mb-lg">Products</h1>
		<p class="text-center container-narrow mb-xl">
			Defluff technologies power modern storytelling through intelligent content analysis and curation.
		</p>
		
		<div class="products-grid">
			{#each $products as product}
				<article class="product-card">
					<h2>{product.name}</h2>
					<p class="product-tagline">{product.tagline}</p>
					<p class="product-description">{product.description}</p>
					<a 
						href="/products/{product.slug}" 
						class="btn btn-primary"
						on:click|preventDefault={() => goto(`/products/${product.slug}`)}
					>
						Learn more
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.products-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
		max-width: 800px;
		margin: 0 auto;
	}

	.product-card {
		padding: var(--spacing-xl);
		border: 1px solid var(--color-gray-200);
		background-color: var(--color-white);
		transition: box-shadow 0.2s ease;
	}

	.product-card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.product-card h2 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		margin-bottom: var(--spacing-sm);
	}

	.product-tagline {
		font-weight: 500;
		color: var(--color-gray-700);
		margin-bottom: var(--spacing-md);
		font-size: 1.125rem;
	}

	.product-description {
		margin-bottom: var(--spacing-lg);
		color: var(--color-gray-600);
	}

	@media (min-width: 768px) {
		.products-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>

