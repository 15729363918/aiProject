import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://159.75.169.224:1235',
				changeOrigin: true,
			},
		},
	},
})
