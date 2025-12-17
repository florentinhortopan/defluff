import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Product } from '$lib/types';

// Static product data - in a real app, this would come from a database or API
const PRODUCTS: Product[] = [
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
];

export const load: PageLoad = ({ params }) => {
	if (!params.slug) {
		throw error(400, 'Missing product slug');
	}

	const product = PRODUCTS.find((p) => p.slug === params.slug);
	
	if (!product) {
		throw error(404, `Product "${params.slug}" not found`);
	}
	
	return {
		product
	};
};

