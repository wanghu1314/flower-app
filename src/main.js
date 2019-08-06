import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//第三方组件库在下面引入
//1:完整引入mint-ui
import MintUI from 'mint-ui' 
//2:单引引入mint-ui样式
import 'mint-ui/lib/style.css'

//3:将mint-ui注册vue
Vue.use(MintUI);

// 第三方组件element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from './axios'

import qs from 'qs'
Vue.prototype.$qs = qs
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
Vue.component("my-footer",MyFooter);
Vue.component("my-header",MyHeader);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import'./font/iconfont.css'
Vue.use(VueAwesomeSwiper)

import carousel from './components/carousel.vue'
Vue.component("my-carousel",carousel);

// import carouselSwiper from './components/carouselSwiper.vue'
// Vue.component("my-carouselSwiper",carouselSwiper);

import carouselSwiper1 from './components/carouselSwiper1.vue'
Vue.component("my-carouselSwiper1",carouselSwiper1);

//将axios对象强行添加到Vue类型的原型对象中
// Vue.prototype.axios=axios;
//结果: 
//在所有组件中都可以用this.axios.get()发送请求。

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
