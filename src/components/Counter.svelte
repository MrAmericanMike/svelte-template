<svelte:options tag="my-counter" accessors={true} />

<script>
	import { onMount } from "svelte";
	let count = 0;
	function increment(event) {
		count += 1;
		const countIncrementEvent = new CustomEvent("countIncrementEvent", { detail: { count: count }, composed: true });
		window.dispatchEvent(countIncrementEvent);
	}

	onMount(() => {
		window.addEventListener("incrementCount", () => {
			count += 1;
			const countIncrementEvent = new CustomEvent("countIncrementEvent", { detail: { count: count }, composed: true });
			window.dispatchEvent(countIncrementEvent);
		});
	});
</script>

<button on:click={increment}>
	Count is {count}
</button>

<style>
	button {
		font-size: 1rem;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		cursor: pointer;
		border: 1px solid crimson;
		border-radius: 0.25rem;
		background-color: #101012;
		padding: 0.5rem 1rem;
		color: aliceblue;
	}
</style>
