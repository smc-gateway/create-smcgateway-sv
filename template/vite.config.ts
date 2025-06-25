import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const target = {
	target: 'http://192.168.100.250',
	changeOrigin: true,
	secure: false,
	ws: true,
}

// https://vite.dev/config/
export default defineConfig({
	base: "",
	plugins: [svelte()],
	server: {
		proxy: {
			'/api': target
		}
	}
})
