import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import city from '@/pages/city/city'
import detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/city',
      name: 'city',
      component: city
    }, {
      // 动态路由，必须是自定的detail路径 后跟参数
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
