import { defineConfig } from 'vite';
import Unfonts from 'unplugin-fonts/vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			include: path.resolve(__dirname, 'src', 'shared', 'icons'), // "**/*.svg?react"
		}),
		Unfonts({
			custom: {
				families: [
					{
						name: 'DINPro',
						src: './src/shared/assets/fonts/*.ttf',
						transform(font) {
							if (font.basename === 'DINPro-Bold') {
								font.weight = 700;
							}

							if (font.basename === 'DINPro-Light') {
								font.weight = 300;
							}

							if (font.basename === 'DINPro-Medium') {
								font.weight = 500;
							}

							return font;
						},
					},
				],
				display: 'swap',
				preload: true,
				prefetch: false,
				injectTo: 'head-prepend',
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
});
