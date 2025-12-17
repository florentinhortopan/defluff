import { writable } from 'svelte/store';
import type { NavigationItem } from '$lib/types';

export const navigationItems = writable<NavigationItem[]>([
	{ label: 'Home', href: '/' },
	{ label: 'Platform', href: '/product' },
	{ label: 'Solutions', href: '/solutions' },
	{ label: 'How It Works', href: '/how-it-works' },
	{ label: 'Products', href: '/products' },
	{ label: 'About', href: '/about' },
	{ label: 'Contact', href: '/contact' }
]);

export const isMenuOpen = writable<boolean>(false);

export function toggleMenu() {
	isMenuOpen.update((value) => !value);
}

export function closeMenu() {
	isMenuOpen.set(false);
}

