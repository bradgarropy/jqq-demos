import type { PageLoad } from './$types';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export const load: PageLoad = async () => {
	storyblokInit({
		accessToken: 'ePrNdxRZK5ZxrRRrbZMxYgtt',
		use: [apiPlugin],
		apiOptions: {
			region: 'us'
		}
	});

	const storyblokApi = useStoryblokApi();
	const response = await storyblokApi.get('cdn/stories/speakers', { version: 'draft' });
	const { speakers } = response.data.story.content;

	return { speakers };
};
