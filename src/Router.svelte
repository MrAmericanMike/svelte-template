<script>
	import router from "page";

	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Configs from "./pages/Configs.svelte";

	let page;
	let params = {};

	router(
		"/",
		(ctx, next) => {
			params = ctx.params;
			next();
		},
		() => (page = Home)
	);
	router(
		"/about",
		(ctx, next) => {
			params = ctx.params;
			next();
		},
		() => (page = About)
	);
	router(
		"/configs",
		(ctx, next) => {
			params = ctx.params;
			next();
		},
		() => (page = Configs)
	);
	router.start();

	function isObjectEmpty(object) {
		return Object.keys(object).length === 0 && object.constructor === Object;
	}
</script>

{#if isObjectEmpty(params)}
	<svelte:component this={page} />
{:else}
	<svelte:component this={page} {params} />
{/if}
