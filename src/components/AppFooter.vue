<template>
	<footer class="footer">
		<div class="footer__container">
			<p class="footer__text">© Copyright 2023. All right reserved.</p>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'AppFooter',
	data() {
		return {
		}
	}
}
</script>

<style>
.footer__container {
	background: #000;
	min-height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.footer__text {
	color: #fff;
	font-size: 16px;
}
</style>