<script>
	import { menuController } from "@ionic/core/dist";

	function closeMenu() {
		console.log("HERE");
		menuController.close(true).then(() => {});
	}
</script>

<ion-menu side="start" menu-id="main-menu" content-id="main-content">
	<ion-header>
		<ion-toolbar translucent>
			<ion-title>Menu</ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-content>
		<ion-list>
			<ion-router-link href="/">
				<ion-menu-toggle>
					<ion-item>
						<ion-icon name="home" slot="start" />
						<ion-label>Home</ion-label>
					</ion-item>
				</ion-menu-toggle>
			</ion-router-link>
			<ion-router-link href="/about">
				<ion-menu-toggle>
					<ion-item>
						<ion-icon name="person" slot="start" />
						<ion-label>About</ion-label>
					</ion-item>
				</ion-menu-toggle>
			</ion-router-link>
			<ion-router-link href="/post/13">
				<ion-menu-toggle>
					<ion-item>
						<ion-icon name="newspaper" slot="start" />
						<ion-label>Post</ion-label>
					</ion-item>
				</ion-menu-toggle>
			</ion-router-link>
			<ion-router-link href="/golden">
				<ion-menu-toggle>
					<ion-item>
						<ion-icon name="git-branch" slot="start" />
						<ion-label>Golden</ion-label>
					</ion-item>
				</ion-menu-toggle>
			</ion-router-link>
		</ion-list>
	</ion-content>
</ion-menu>

<style>
	ion-icon {
		color: aliceblue;
	}
</style>
