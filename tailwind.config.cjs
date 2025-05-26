/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xs': '350px', // 390px以上の画面サイズでのスタイルを定義
			},
		},
	},
	plugins: [],
}
