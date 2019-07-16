// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 入口文件 在此导入外部文件
import './assets/css/cui.css'
// 手机端解决点击延时的三方库
import fastClick from 'fastclick'
import './assets/font/iconfont.css'
// 轮播插件 全局插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 导入vuex对象
import store from './store/store'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
// 绑定fastclick
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 单例对象
  store,
  components: { App },
  template: '<App/>'
})
