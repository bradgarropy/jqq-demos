import { redirect } from '@sveltejs/kit';
import { altogic } from '../../../altogic';
import type { PageServerLoad } from '../../auth/verify/$types';

const load: PageServerLoad = async ({ url }) => {
	const token = url.searchParams.get('token');

	if (!token) {
		return;
	}

	const { data } = await altogic.endpoint.post('/auth/verify', { token });

	if (!data) {
		throw redirect(302, '/signup/failure');
	}

	throw redirect(302, '/signup/success');
};

export { load };
