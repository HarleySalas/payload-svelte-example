import type { PageServerLoad } from './$types';
import { getPayload } from 'payload';
import config from '$lib/payload.config';

export const load: PageServerLoad = async ({ params }) => {
	const payload = await getPayload({ config });
	const { docs } = await payload.find({ collection: 'users' });

	return {
		users: docs
	};
};
