import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式表
import './assets/css/global.css'
// 引入所有的ElementUI组件库
import ElementUI from 'element-ui'
// 引入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 配置的根路径
axios.defaults.baseURL = 'http://150.158.53.178:6290/api/'
// 请求拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
