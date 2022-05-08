import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Markdown from 'vite-plugin-md'
import Inspect from 'vite-plugin-inspect'

import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/],
		}),
		Pages({
			dirs: [
				//{ dir: './src/layouts', baseRoute: '' },
				{ dir: './src/pages', baseRoute: '' },
				{ dir: resolve(__dirname, './src/pages'), baseRoute: '' },
				{ dir: 'src/features/**/pages', baseRoute: 'features' },
				{ dir: 'src/admin/pages', baseRoute: 'admin' },
			],
			extensions: ['vue', 'md'],
			extendRoute(route: any) {
				if (route.name === 'about')
					route.props = (route: any) => ({ query: route.query.q })

				if (route.name === 'components') {
					return {
						...route,
						beforeEnter: (route: any) => {
							// eslint-disable-next-line no-console
							console.log(route)
						},
					}
				}
			},
		}),

		Markdown(),
		Inspect(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
