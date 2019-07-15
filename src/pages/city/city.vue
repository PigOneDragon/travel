<template>
    <div class="city">
      <city-header :cities="cities"></city-header>
      <city-list :hotCities="hotCities" :cities="cities" :ele="ele" @subClick="preClick"></city-list>
    </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/cityheader'
import CityList from './components/citylist'
export default {
  name: 'city',
  components: {
    CityHeader,
    CityList
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      // 将收到的子组件（ul-zm）传递过来的值再传给子组件的另一个组件元素(ul-list)
      ele: ''
    }
  },
  methods: {
    getInfo () {
      //  这里的'/api'为webpack封装过的转发路径，在config文件夹下的index.js dev{proxyTable:{服务器，转发至路径}}
      axios.get('/api/city.json')
        .then(this.getInfoSuc)
    },
    getInfoSuc (res) {
      res = res.data
      if (res && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    // 接收子组件citylist下的ul-zm的传递值
    preClick (v) {
      this.ele = v
      // console.log(this.ele)
    }
  },
  //  当数据加载完成时执行ajax请求
  mounted () {
    this.getInfo()
  }
}
</script>
<style scoped>

</style>
