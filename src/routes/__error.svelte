<script>
	import { page } from "$app/stores";
	let world = "Error 404";
</script>

<svelte:head>
	<title>Svelte · Error</title>
</svelte:head>

<h1>¡Hola {world}!</h1>
<h2>{$page.url.pathname} not found</h2>

<style>
	h1 {
		color: royalblue;
		text-transform: uppercase;
		font-size: 4em;
	}
	h2 {
		color: royalblue;
		font-size: 2.5em;
	}
</style>
