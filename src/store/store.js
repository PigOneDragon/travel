import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default new Vuex.Store({
  // 如果state中写固定值，刷新页面还将是默认写的值，需要利用html5的本地存储功能，存储当前的城市信息，可直接用localStorage,但出于浏览器兼容性考虑与用户是否开启了隐身模式，需对本地存储进行处理
  state: {
    city: defaultCity
  },
  actions: {
    // actions模块接收从组件dispatch过来的数据，包含上下文信息（ctx,ctx中包含commit方法）与传过来的变量
    changeCity (ctx, city) {
      ctx.commit('changeCity', city) // 这里的changeCity为mutations中定义的方法
    }
  },
  mutations: {
    //  接收actions通过commit传过来的值，进行state更新,接收2个参数。state(存储各组件公用数据的库)，跟要改变的全局组件变量
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
