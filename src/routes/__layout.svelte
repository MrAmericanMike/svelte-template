<script>
	import NavBar from "../components/NavBar.svelte";
</script>

<NavBar />
<main>
	<slot />
</main>

<style>
	main {
		text-align: center;
	}
</style>
