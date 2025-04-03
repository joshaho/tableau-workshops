import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Tableau Training',
			social: {
				github: 'https://github.com/joshaho/tableau-workshops',
			},
			sidebar: [
				{
					label: 'Tableau Prep for Pros',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '0. Getting Started', link: '/guides/1931-0-getting-started/' },
						{ label: '1. Connect to Data', link: '/guides/1931-1-connect-to-data/' },
						{ label: '2. Cleaning Data', link: '/guides/1931-2-cleaning-data/' },
						{ label: '3. Transform Data', link: '/guides/1931-3-transform-data/' },
						{ label: '4. Calculated Fields', link: '/guides/1931-4-calculated-fields/' },
						{ label: '5. Parameters and Output', link: '/guides/1931-5-parameters-and-outputs/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
