import adapter from "@sveltejs/adapter-static";
import { resolve } from "path";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "index.html",
			precompress: false
		}),
		files: {
			assets: "src/static",
			appTemplate: "src/index.html"
		},
		appDir: "app",
		serviceWorker: {
			register: false
		},
		alias: {
			$: resolve("./src")
		}
	}
};

export default config;
