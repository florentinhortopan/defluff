<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Error - Defluff</title>
</svelte:head>

<section class="section section-lg">
	<div class="container container-narrow text-center">
		<h1>{$page.status || 'Error'}</h1>
		<p class="error-message">
			{$page.error?.message || 'An unexpected error occurred'}
		</p>
		<div class="error-actions">
			<a href="/" class="btn btn-primary" on:click|preventDefault={() => goto('/')}>
				Go Home
			</a>
			<button class="btn btn-secondary" on:click={() => window.location.reload()}>
				Reload Page
			</button>
		</div>
	</div>
</section>

<style>
	.error-message {
		font-size: 1.125rem;
		color: var(--color-gray-600);
		margin-bottom: var(--spacing-xl);
	}

	.error-actions {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		align-items: center;
		margin-top: var(--spacing-xl);
	}

	@media (min-width: 768px) {
		.error-actions {
			flex-direction: row;
			justify-content: center;
		}
	}
</style>

