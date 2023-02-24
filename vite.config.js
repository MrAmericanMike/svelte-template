import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

/** @type {import("vite").UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 3000
	},
	preview: {
		port: 8080
	},
	build: {
		emptyOutDir: true
	},
	resolve: {
		alias: {
			$: resolve("./src")
		}
	}
};

export default config;
