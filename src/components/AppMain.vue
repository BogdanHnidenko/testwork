<template>
	<main class="main">
		<div class="main__container">
			<section class="films">
				<router-view></router-view>
			</section>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
		}
	},
}
</script>

<style>
.main {
	flex: 1;
	height: 100%;
}


.main__container {

	flex: 1;
	padding-top: 40px;
	padding-bottom: 40px;
	height: 100%;
	background: rgb(181, 180, 180);

}

.films {
	height: 100%;
	width: 100%;
}
</style>