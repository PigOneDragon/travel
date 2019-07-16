<template>
    <div id="city">
        <div class="header-city">
           <div class="top">
                <router-link to="/">
                    <span class="iconfont cityHeadBack">&#xe624;</span>
                </router-link>
                城市查询
           </div>
           <div class="search">
               <input type="text" placeholder="请输入城市名或拼音" v-model="keyword" />
           </div>
           <!-- 搜索内容显示 ,当搜索框无值时隐藏-->
           <div class="search_area" v-show="keyword" ref="search_area">
               <ul>
                   <li class="item" v-for="item of list" :key="item.id" @click="handVxClick(item.name)">{{item.name}}</li>
                   <!-- 未找到数据的显示与否，通过计算属性判断下list是否为空即可 -->
                   <li class="item" v-show="hasData">未查询到数据！</li>
               </ul>
           </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'cityheader',
  props: {
    cities: Object
  },
  data () {
    return {
      // v-model双向绑定，监听输入框值变化
      keyword: '',
      // 遍历city.json中的城市列表
      list: [],
      timer: null
    }
  },
  methods: {
    // 组件更新，调用dispatch传递给Actions （再自定义个函数,将改变的值传入）
    handVxClick (value) {
      this.$store.dispatch('changeCity', value)
      // alert(value)
      // 点击后跳转至首页路由
      this.$router.push('./')
    }
  },
  // 监听输入值变化
  watch: {
    keyword () {
      // 函数节流 减少事件执行次数
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 当值变化时，遍历城市列表数组，遍历每个键值，判断keyword是否在cities.name\spell中可以找到，将找到的部分放入该组件的list数组，用于在search_area中的循环
      this.timer = setTimeout(() => {
        const dataList = []
        for (let i in this.cities) {
          this.cities[i].forEach(element => {
            if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
              dataList.push(element)
            }
          })
        }
        //  返回满足条件的数据
        this.list = dataList
      }, 100)
    }
  },
  mounted () {
    // 用滚动插件实现数据过多时的滑动效果
    this.scroll = new BScroll(this.$refs.search_area)
  },
  computed: {
    // 没有数据时显示提示信息
    hasData () {
      return !this.list.length
    }
  }
}
</script>

<style scoped>
    .header-city{
        background-color: #00bcd4;
        padding: 0 .2rem;
    }
    .header-city .top{
        height: .86rem;
        line-height: .86rem;
        text-align: center;
        color: #fff;
        font-size: .32rem;
    }
    .cityHeadBack{
        float: left;
        color: #fff;
    }
    .search{
        padding: .02rem 0 .04rem;
    }
    .search input{
        display: block;
        width: 100%;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        color: #666;
        font-size: .28rem;
        border-radius: .01rem;
        border: none;
        outline: 0;
    }
    .search_area{
      position: absolute;
      top: 1.6rem;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #eee;
      z-index: 5;
      overflow: hidden;
    }
    .search_area .item{
      line-height: 1.5;
      padding:0 .3rem;
      background-color: #fff;
      color: #999;
    }
</style>
