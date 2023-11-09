<template>
	<header class="header">
		<div class="header__container">
			<div class="logo">Films</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
	data() {
		return {
		}
	}
}
</script>

<style>
.header__container {
	min-height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #000;
}

.logo {
	color: #fff;
	font-size: 20px;
}
</style>