<template>
	<div class="cart">
		<div class="cart__img">
			<img :src="'https://image.tmdb.org/t/p/w500/' + imgUrl" alt="">
		</div>
		<h2 class="cart__title">{{ title }}</h2>
		<router-link class="cart__link" tag="a" :to="{ name: 'CartAbout', params: { allProps } }"
			:key="id">More</router-link>
	</div>
</template>

<script>

export default {
	props: {
		allProps: Object,
		title: String,
		date: String,
		imgUrl: String,
		id: Number
	},
	data() {
		return {
		};
	},

}
</script>

<style>
.cart {
	color: #fff;
	background: rgb(26, 26, 26);
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	min-height: 610px;
}

.cart__img {
	max-width: 300px;
}

.cart__title {
	font-size: 20px;
}

.cart__img img {
	width: 100%;
	object-fit: cover;
}

.cart__link {
	color: #000;
	background: rgb(219, 219, 219);
	padding: 10px;
	border-radius: 20px;
}
</style>