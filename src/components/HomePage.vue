<template>
	<section class="home">
		<AppHeader />
		<AppMain />
		<AppFooter />
	</section>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
import AppFooter from './AppFooter.vue';

export default {
	name: 'HomePage',
	data() {
		return {
		}
	},
	components: {
		AppHeader,
		AppMain,
		AppFooter
	}
}
</script>

<style>
.home {
	min-height: 100vh;
	background: rgb(44, 44, 44);
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
</style>