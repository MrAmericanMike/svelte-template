<svelte:options tag="my-clock" />

<script>
	import { onMount, onDestroy } from "svelte";
	let date = new Date().toLocaleTimeString() || "";
	let interval;

	onMount(() => {
		interval = setInterval(() => {
			date = new Date().toLocaleTimeString();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<span>{date}</span>

<style>
	span {
		font-size: 1rem;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		border: 1px solid crimson;
		border-radius: 0.25rem;
		background-color: #101012;
		padding: 0.5rem 1rem;
		color: aliceblue;
	}
</style>
