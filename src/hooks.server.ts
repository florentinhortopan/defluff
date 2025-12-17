import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	try {
		const response = await resolve(event);
		return response;
	} catch (error) {
		console.error('Error in handle:', error);
		throw error;
	}
};

