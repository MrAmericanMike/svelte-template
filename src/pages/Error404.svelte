<script>
	export let params;
</script>

<div class="ion-page" id="main-content">
	<ion-header>
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-menu-button />
			</ion-buttons>
			<ion-title>Error 404</ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
		<h1>{params[0]} not found</h1>
	</ion-content>
</div>

<style>
	h1 {
		color: royalblue;
		font-size: 2em;
	}
</style>
