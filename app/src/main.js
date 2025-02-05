import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')
