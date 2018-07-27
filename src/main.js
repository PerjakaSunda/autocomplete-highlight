import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import(/* webpackChunkName: "home" */ './assets/css/style.css')

Vue.config.productionTip = false

Vue.filter('currency', function (value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
