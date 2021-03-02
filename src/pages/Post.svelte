<script>
	export let params = {};
	let world = "Post";
</script>

<div class="ion-page" id="main-content">
	<ion-header>
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-menu-button />
			</ion-buttons>
			<ion-title>Post {params.id}</ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
		<h1>Post page for post {params.id}</h1>
	</ion-content>
</div>

<style>
	h1 {
		color: royalblue;
		font-size: 2em;
	}
</style>
