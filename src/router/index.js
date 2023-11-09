import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../components/SignUp'
import HomePage from '../components/HomePage.vue'
import CartAbout from '../components/CartAbout.vue'
import ColumnsCart from '../components/ColumnsCart.vue'



Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: SignUp
	},
	{
		path: '/home',
		component: HomePage,
		children: [
			{
				path: '/',
				component: ColumnsCart
			},
			{
				path: '/home/:id',
				name: 'CartAbout',
				component: CartAbout,
				props: route => ({
					allProps: route.params.allProps,
				}),

			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
