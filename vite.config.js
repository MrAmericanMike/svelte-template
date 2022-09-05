import { sveltekit } from "@sveltejs/kit/vite";

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
	}
};

export default config;
