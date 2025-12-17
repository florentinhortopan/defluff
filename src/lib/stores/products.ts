import { writable } from 'svelte/store';
import type { Product } from '$lib/types';

export const products = writable<Product[]>([
	{
		id: 'puxa-ai',
		name: 'Puxa.ai',
		slug: 'puxa-ai',
		tagline: 'Transform attention into understanding, and understanding into action',
		description: 'Puxa.ai helps people transform social media and web content into structured knowledge and actionable insights. Built from the core mission of helping people "defluff" information overload.',
		features: [
			'Content intelligence and analysis',
			'Knowledge extraction from media',
			'Structured information architecture',
			'Actionable insights generation'
		],
		capabilities: [
			'Analyze video, audio, and web content',
			'Extract key concepts and definitions',
			'Create structured knowledge cards',
			'Generate guided learning paths'
		]
	}
]);

export function getProductBySlug(slug: string): Product | undefined {
	let product: Product | undefined;
	products.subscribe((value) => {
		product = value.find((p) => p.slug === slug);
	})();
	return product;
}

