import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Details from './views/Details'
import Home from './views/Home'
import Product from './views/Product'
import Cart from './views/Cart'
import Classify from './views/Classify'
import Find from './views/Find'
import Search from './views/Search'
import Login from './views/Login'
Vue.use(Router)

export default new Router({

    routes: [{
            path: '/',
            component: Index,
            children: [{
                path: '',
                components: {
                    indexx: Home,
                    group: Classify,
                    mine:Login
                }
            }]
        },
        {
            path: '/product',
            component: Product,
        },
        {
            path: '/Details',
            component: Details
        },
        {
            path: '/find',
            component: Find
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/cart',
            component: Cart
        }
        // ,
        // {
        //     path: '/login',
        //     component:Login
        //     },
    ]

})