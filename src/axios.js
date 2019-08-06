// 1.引入vue实例
import Vue from "vue"
// 2.引入axios库
import axios from "axios"
// 3.发送请求时保存session信息
axios.defaults.withCredentials=true
// 4.设置基础路径
axios.defaults.baseURL="http://127.0.0.1:3002/"
// 5.将axios注册vue实例
Vue.prototype.axios=axios
// 6.在main.就是引入axios.js