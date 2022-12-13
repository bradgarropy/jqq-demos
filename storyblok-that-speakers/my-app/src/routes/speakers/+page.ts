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

	const thatConference = speakers.reduce(
		(acc: any, curr: any) => {
			if (curr.keynote) {
				acc.keynoteSpeakers.push(curr);
			} else {
				acc.speakers.push(curr);
			}

			return acc;
		},
		{
			keynoteSpeakers: [],
			speakers: []
		}
	);

	return thatConference;
};
