import adapter from "@sveltejs/adapter-static";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null,
			precompress: false
		}),
		files: {
			assets: "src/static",
			appTemplate: "src/index.html"
		},
		appDir: "app",
		trailingSlash: "always",
		serviceWorker: {
			register: false
		}
	}
};

export default config;
