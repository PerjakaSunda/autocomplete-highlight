import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue')
const ProductView = () => import(/* webpackChunkName: "product" */ './views/ProductView.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'productView',
      component: ProductView
    }
  ]
})
