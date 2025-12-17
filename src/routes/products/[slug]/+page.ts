import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { get } from 'svelte/store';
import { products } from '$lib/stores/products';

export const load: PageLoad = ({ params }) => {
	const allProducts = get(products);
	const product = allProducts.find((p) => p.slug === params.slug);
	
	if (!product) {
		throw error(404, 'Product not found');
	}
	
	return {
		product
	};
};

