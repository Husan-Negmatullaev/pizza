import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			include: /\.(jsx|tsx)$/,
		}),
		svgr({
			svgrOptions: {
				icon: '1em',
				svgo: false,
			},
		}),
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src'),
			},
		],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@use "@/app/styles/base/mixins.scss" as *;			
					@use "@/app/styles/base/variables.scss" as *;			
				`,
			},
		},
	},
});
