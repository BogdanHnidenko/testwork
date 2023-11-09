<template>
	<div class="information">
		<input class="search" type="text" @input="filterData" v-model="search" placeholder="Search">
		<div class="columns">
			<div v-for="film in filteredData" :key="film.id" class="column">
				<AppCart :allProps="film" :title="film.title" :date="film.release_date" :imgUrl="film.poster_path"
					:id="film.id" />
			</div>
		</div>
	</div>
</template>

<script>
import AppCart from './AppCarts.vue';
export default {
	data() {
		return {
			search: '',
			data: []
		}
	},
	components: {
		AppCart
	},
	mounted() {
		this.fetchMovies();
	},
	methods: {
		fetchMovies() {
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWM4MTcxN2QzY2NjYzcwN2E0NTU0ZTY0OWNmNTA0ZSIsInN1YiI6IjY1NGE3ODU1NTMyYWNiMDBjNDgzODExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhA_KKhS50pIDRhsECaDqV6SlHgD6XMEXQIdSVxOydk'
				}
			};

			fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
				.then(response => response.json())
				.then(response => this.data = response.results)
				.catch(err => console.error(err));
		},

	},
	computed: {
		filteredData() {
			const lowerSearch = this.search.toLowerCase();
			return this.data.filter((film) => film.title.toLowerCase().includes(lowerSearch));
		},
	}
}
</script>

<style>
.columns {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 30px;
}

.column {
	max-width: 350px;
}


.search {
	max-height: 20px;
	min-width: 100%;
	padding: 20px;
	margin-bottom: 20px;
}
</style>