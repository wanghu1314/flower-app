import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'

import qs from 'qs'
Vue.prototype.$qs = qs
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
Vue.component("my-footer",MyFooter);
Vue.component("my-header",MyHeader);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '../public/font/iconfont.css'
// import'./font/iconfont.css'
Vue.use(VueAwesomeSwiper)

import carousel from './components/carousel.vue'
Vue.component("my-carousel",carousel);
import carouselSwiper from './components/carouselSwiper.vue'
Vue.component("my-carouselSwiper",carouselSwiper);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
