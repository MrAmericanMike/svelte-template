<script>
	import { page } from "$app/stores";
	let world = "Post";
	let id = $page.params.id;
</script>

<svelte:head>
	<title>Svelte · Post</title>
</svelte:head>

<h1>¡Hola {world}!</h1>
<h2>ID is {id}</h2>

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
