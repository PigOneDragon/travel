<template>
    <div>
        <header-com></header-com>
        <header-swiper :swiperList="swiperList"></header-swiper>
        <main-nav :iconList="iconList"></main-nav>
        <main-rec :recList="recList"></main-rec>
        <main-hot :weekList="weekList"></main-hot>
    </div>
</template>
<script>
import HeaderCom from './components/header'
import HeaderSwiper from './components/swiper'
import MainNav from './components/list'
import MainRec from './components/rec'
import MainHot from './components/tuijian'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HeaderCom,
    HeaderSwiper,
    MainNav,
    MainRec,
    MainHot
  },
  //  向各个子组件传递的数据
  data: function () {
    return {
      swiperList: [],
      iconList: [],
      recList: [],
      weekList: [],
      // 记录请求ajax时的参数
      lastCity: ''
    }
  },
  methods: {
    getInfo () {
      //  这里的'/api'为webpack封装过的转发路径，在config文件夹下的index.js dev{proxyTable:{服务器，转发至路径}}
      axios.get('/api/index.json?city=' + this.$store.state.city)
        .then(this.getInfoSuc)
    },
    getInfoSuc (res) {
      res = res.data
      if (res && res.data) {
        const data = res.data
        // this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recList = data.recommendList
        this.weekList = data.weekendList
      }
    }
  },
  //  当数据加载完成时执行ajax请求
  mounted () {
    this.getInfo()
    this.lastCity = this.$store.state.city
  },
  // 定义keep-alive的activatd方法
  activated () {
    // 判断下页面重新加载时的请求是否跟上次请求的数据一致，不一致重新加载数据
    if (this.$store.state.city !== this.lastCity) {
      this.lastCity = this.$store.state.city
      this.getInfo()
    }
  }
}
</script>
<style>
</style>
