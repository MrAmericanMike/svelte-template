import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	root: "src",
	server: {
		port: 3000
	},
	preview: {
		port: 8080
	},
	build: {
		minify: true,
		assetsInlineLimit: 0,
		outDir: "../dist",
		lib: {
			entry: "./src/main.js",
			name: "SvelteWebComponents",
			formats: ["cjs", "es", "iife", "umd"]
		},
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				chunkFileNames: "assets/[name].js",
				assetFileNames: "assets/[name].[ext]"
			}
		}
	},
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true
			}
		})
	]
});
