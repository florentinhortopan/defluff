export interface Product {
	id: string;
	name: string;
	slug: string;
	tagline: string;
	description: string;
	features: string[];
	capabilities: string[];
}

export interface NavigationItem {
	label: string;
	href: string;
}

export interface PageMetadata {
	title: string;
	description: string;
}

