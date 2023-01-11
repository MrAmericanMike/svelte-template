<script>
	let world = "World";
	function openConfigsPage() {
		window.API.openConfigsPage({ message: "Hello World" });
	}
	function handleOpenConfigsPage(event) {
		console.log(event);
	}
</script>

<main>
	<h1>Hello {world}</h1>
	<div>
		<h2 on:keyup={handleOpenConfigsPage} on:click={openConfigsPage}>Open configs page</h2>
		<em>This opens through code</em>
	</div>
	<div>
		<a href="/about" target="_blank">ABOUT</a><br />
		<em>This opens as link</em>
	</div>
</main>

<style>
	main {
		text-align: center;
	}
	h1 {
		color: royalblue;
		text-transform: uppercase;
		font-size: 6em;
	}
	h2 {
		color: aliceblue;
		cursor: pointer;
	}
	a {
		color: aliceblue;
		display: inline-block;
		margin-top: 1rem;
	}
</style>
