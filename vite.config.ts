import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), Pages({
		dirs: [
			{ dir: './src/layouts', baseRoute: '' },
			{ dir: './src/pages', baseRoute: '' },
		],
	})],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})