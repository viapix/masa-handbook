// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MaSA UIUC',
			social: {
				github: 'https://github.com/withastro/starlight',
				instagram: 'https://www.instagram.com/masauiuc',
				facebook: 'https://www.facebook.com/groups/masa.uiuc'
			},
			sidebar: [
				{
					label: 'Incoming Students Guide',
					autogenerate: { directory: 'newstudents' },
				},
			],
		}),
	],
});
