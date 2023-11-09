<template>
	<div class="cart-detail">
		<div class="cart-detail__info">
			<router-link class="cart-detail__back" tag="a" to='/home'>Back</router-link>
			<h1 class="cart-detail__title">{{ allProps.title }}</h1>
			<p class="cart-detail__text">{{ allProps.overview }}</p>
			<p class="cart-detail">{{ allProps.release_date }}</p>
		</div>
		<div class="cart-detail__img">
			<img :src="'https://image.tmdb.org/t/p/w500/' + allProps.poster_path" alt="">
		</div>
	</div>
</template>

<script>
export default {
	props: {
		allProps: Object
	},
	data() {
		return {

		}
	},

}
</script>

<style>
.cart-detail {
	display: flex;
}

.cart-detail__info {
	flex: 0 1 70%;
}

.cart-detail__back {
	background: #000;
	color: #fff;
	padding: 20px;
	border-radius: 10px;
	margin-bottom: 40px;
	display: inline-block;
}

.cart-detail__title {
	text-align: center;
	font-size: 30px;
	margin-bottom: 20px;
}

.cart-detail__text {
	font-size: 20px;
	margin-bottom: 20px;
}

.cart-detail__img {
	flex: 0 1 30%;
	border-radius: 10px;
	overflow: hidden;
}

.cart-detail__img img {
	width: 100%;
	object-fit: cover;
}
</style>