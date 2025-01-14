/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'dark-mode': '#242424',
				'light-mode': '#f3f33f'
			},
			fontFamily: {
				'inter': 'Inter Variable'
			},
			colors: {
				text: 'rgba(var(--text))',
				background: 'rgba(var(--background))',
				accent: 'rgba(var(--accent))'
			}
		}
	},
	darkMode: 'class',
	plugins: [],
}
