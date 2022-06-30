import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	root: "src",
	build: {
		minify: true,
		assetsInlineLimit: 0,
		outDir: "../public",
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				chunkFileNames: "assets/[name].js",
				assetFileNames: "assets/[name].[ext]"
			}
		}
	},
	plugins: [svelte()]
});

