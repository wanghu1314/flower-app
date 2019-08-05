import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Details from './views/Details'
import Productlist from './views/Productlist'
import Login from './views/Login'
import carouselSwiper from './components/carouselSwiper.vue'
import carousel from './components/carousel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index 
    },
    {
      path: '/cindex',
      component:carouselSwiper  ,
     
    },
    {
      path: '/carousel',
      component:carousel,
    },
    {
      path:'/details',
      component:Details,
    },
    {
      path:'/productlist',
      component:Productlist,
    },
    {
      path:'/login',
      component:Login,
    },
   
  ]
})
