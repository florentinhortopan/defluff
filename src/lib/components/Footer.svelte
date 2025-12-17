<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-section">
				<h3>Defluff</h3>
				<p>The storytelling intelligence layer that turns media into structured knowledge.</p>
			</div>
			
			<div class="footer-section">
				<h4>Platform</h4>
				<nav class="footer-nav">
					<a href="/product" on:click|preventDefault={() => goto('/product')}>Platform</a>
					<a href="/solutions" on:click|preventDefault={() => goto('/solutions')}>Solutions</a>
					<a href="/how-it-works" on:click|preventDefault={() => goto('/how-it-works')}>How It Works</a>
					<a href="/products" on:click|preventDefault={() => goto('/products')}>Products</a>
				</nav>
			</div>
			
			<div class="footer-section">
				<h4>Company</h4>
				<nav class="footer-nav">
					<a href="/about" on:click|preventDefault={() => goto('/about')}>About</a>
					<a href="/contact" on:click|preventDefault={() => goto('/contact')}>Contact</a>
					<a href="/privacy" on:click|preventDefault={() => goto('/privacy')}>Privacy</a>
					<a href="/terms" on:click|preventDefault={() => goto('/terms')}>Terms</a>
				</nav>
			</div>
		</div>
		
		<div class="footer-bottom">
			<p>&copy; {new Date().getFullYear()} Defluff. All rights reserved.</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: var(--color-gray-50);
		border-top: 1px solid var(--color-gray-200);
		padding: var(--spacing-2xl) 0 var(--spacing-lg);
		margin-top: var(--spacing-3xl);
	}

	.footer-content {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
		margin-bottom: var(--spacing-xl);
	}

	.footer-section h3 {
		font-size: 1.25rem;
		margin-bottom: var(--spacing-sm);
	}

	.footer-section h4 {
		font-size: 1rem;
		margin-bottom: var(--spacing-sm);
	}

	.footer-section p {
		font-size: 0.875rem;
		color: var(--color-gray-600);
		margin-bottom: 0;
	}

	.footer-nav {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.footer-nav a {
		font-size: 0.875rem;
		color: var(--color-gray-600);
		text-decoration: none;
	}

	.footer-nav a:hover {
		color: var(--color-black);
	}

	.footer-bottom {
		padding-top: var(--spacing-lg);
		border-top: 1px solid var(--color-gray-200);
		text-align: center;
	}

	.footer-bottom p {
		font-size: 0.875rem;
		color: var(--color-gray-500);
		margin: 0;
	}

	@media (min-width: 768px) {
		.footer-content {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>

