<script lang="ts">
	import { isMenuOpen, toggleMenu, closeMenu } from '$lib/stores/navigation';
	import { goto } from '$app/navigation';

	function handleNavigation(href: string) {
		closeMenu();
		goto(href);
	}
</script>

<header class="header">
	<div class="container">
		<nav class="nav">
			<a href="/" class="logo" on:click|preventDefault={() => handleNavigation('/')}>
				<span class="logo-text">Defluff</span>
			</a>
			
			<button 
				class="menu-toggle"
				aria-label="Toggle menu"
				on:click={toggleMenu}
				aria-expanded={$isMenuOpen}
			>
				<span class="menu-icon" class:open={$isMenuOpen}>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</button>

			<div class="nav-menu" class:open={$isMenuOpen}>
				<a href="/" on:click|preventDefault={() => handleNavigation('/')}>Home</a>
				<a href="/product" on:click|preventDefault={() => handleNavigation('/product')}>Platform</a>
				<a href="/solutions" on:click|preventDefault={() => handleNavigation('/solutions')}>Solutions</a>
				<a href="/how-it-works" on:click|preventDefault={() => handleNavigation('/how-it-works')}>How It Works</a>
				<a href="/products" on:click|preventDefault={() => handleNavigation('/products')}>Products</a>
				<a href="/about" on:click|preventDefault={() => handleNavigation('/about')}>About</a>
				<a href="/contact" on:click|preventDefault={() => handleNavigation('/contact')}>Contact</a>
			</div>
		</nav>
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		background-color: var(--color-white);
		border-bottom: 1px solid var(--color-gray-200);
		z-index: 100;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-md) 0;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		text-decoration: none;
		color: var(--color-black);
	}

	.logo:hover {
		opacity: 1;
	}

	.menu-toggle {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 2rem;
		height: 2rem;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 10;
	}

	.menu-icon {
		width: 2rem;
		height: 1.5rem;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.menu-icon span {
		width: 100%;
		height: 2px;
		background-color: var(--color-black);
		transition: all 0.3s ease;
	}

	.menu-icon.open span:nth-child(1) {
		transform: rotate(45deg) translate(8px, 8px);
	}

	.menu-icon.open span:nth-child(2) {
		opacity: 0;
	}

	.menu-icon.open span:nth-child(3) {
		transform: rotate(-45deg) translate(8px, -8px);
	}

	.nav-menu {
		position: fixed;
		top: 0;
		right: -100%;
		width: 80%;
		max-width: 300px;
		height: 100vh;
		background-color: var(--color-white);
		border-left: 1px solid var(--color-gray-200);
		padding: var(--spacing-3xl) var(--spacing-lg);
		transition: right 0.3s ease;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
		overflow-y: auto;
	}

	.nav-menu.open {
		right: 0;
	}

	.nav-menu a {
		font-size: 1.125rem;
		font-weight: 500;
		text-decoration: none;
		color: var(--color-black);
		padding: var(--spacing-sm) 0;
	}

	@media (min-width: 768px) {
		.menu-toggle {
			display: none;
		}

		.nav-menu {
			position: static;
			width: auto;
			height: auto;
			flex-direction: row;
			gap: var(--spacing-lg);
			padding: 0;
			border: none;
			background: transparent;
		}

		.nav-menu a {
			font-size: 1rem;
		}
	}
</style>

