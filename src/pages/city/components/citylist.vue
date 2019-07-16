<template>
    <div id="citylist" class="cityWarp" ref="wrapper">
        <ul class="ul-list">
            <li>
                <div class="tit">当前位置</div>
                <dl>
                    <dd>
                        <div class="con">{{this.$store.state.city}}</div>
                    </dd>
                </dl>
            </li>
            <li>
                <div class="tit">热门城市</div>
                <dl>
                    <dd v-for="item of hotCities" :key="item.id">
                      <!-- 绑定事件，点击后更新vuex仓库的公用变量 -->
                        <div class="con" @click="handVxClick(item.name)">{{item.name}}</div>
                    </dd>
                </dl>
            </li>
            <!-- 对象的key值相当于字典的键  循环绑定的ref需要加个:-->
            <li v-for="(items, key) of cities" :key="key" :ref="key" @touchstatr="touchS">
                <div class="tit">{{key}}</div>
                <div class="item-list">
                    <div class="item" v-for="item of items" :key="item.id" @click="handVxClick(item.name)">{{item.name}}</div>
                </div>
            </li>
        </ul>
        <!-- 拖动字母 城市列表同步滑动，绑定VUE的触摸事件（开始，移动，结束） -->
        <ul class="ul-zm">
            <li v-for="item of cityIdx" :key="item" @click="changeClick" :ref="item" @touchstart="touchS" @touchmove="touchMove" @touchend="touchEnd">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'citylist',
  props: {
    hotCities: Array,
    cities: Object,
    ele: String
  },
  data () {
    return {
      flag: false,
      startY: 0,
      timer: {}
    }
  },
  updated () {
    // 当第一次加载为获取ajax数据时，该组件接收到的是个空数据，当获取到ajax数据后，组件更新，更新时获取元素A 距顶部的距离 方便后期调用
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    //   点击右侧字母，将触发点击事件的元素值传递给父组件（city.vue>city-list组件）
    changeClick (e) {
      var value = e.target.innerText
      this.$emit('subClick', value)
      // console.log(this.ele)
    //   var ele1 = this.ele
    //   this.$refs.wrapper.scrollToElement(this.$refs.ele1)
    },
    touchS () {
      this.flag = true
    },
    touchMove (e) {
      if (this.flag) {
        // 这里每次滑动都触发了计算，放在updates生命周期钩子里减少计算
        // const startY = this.$refs['A'][0].offsetTop
        // console.log(startY)
        // 获取滑动时手指坐标
        /*  const indexY = e.touches[0].clientY
        // console.log(indexY)
        // 手指坐标减去首字母头部距离 除以字母间距 向下取整得到滑动至第几个字母
        var idxY = Math.floor((indexY - this.startY - 21) / 21)
        if (idxY >= 0 && idxY <= 22) {
          // console.log(idxY)
          this.$emit('subClick', this.cityIdx[idxY])
        } */
        // 函数节流，16ms触发一次，两次触发事件不满16ms间隔的不执行
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 获取滑动时手指坐标
          const indexY = e.touches[0].clientY
          // console.log(indexY)
          // 手指坐标减去首字母头部距离 除以字母间距 向下取整得到滑动至第几个字母
          var idxY = Math.floor((indexY - this.startY - 21) / 21)
          if (idxY >= 0 && idxY <= 22) {
            // console.log(idxY)
            this.$emit('subClick', this.cityIdx[idxY])
          }
        }, 16)
      }
    },
    touchEnd () {
      this.flag = false
    },
    // 组件更新，调用dispatch传递给Actions （再自定义个函数,将改变的值传入）
    handVxClick (value) {
      this.$store.dispatch('changeCity', value)
      // alert(value)
      // 点击后跳转至首页路由
      this.$router.push('./')
    }
  },
  // 实现点击字母索引跳转至相应城市列表
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  // 监听事件 监听传递过来的ele的变化
  watch: {
    // 函数名跟监听的对象名称一致
    ele () {
      // console.log(this.ele)
      if (this.ele) {
        // 循环绑定ref 需要写成绑定形式 :ref 注意冒号
        const element = this.$refs[this.ele]
        console.log(element)
        this.scroll.scrollToElement(element[0])
      }
    }
  },
  // 手指划过字母 城市列表同步滑动
  computed: {
    cityIdx () {
      const cityIdx = []
      for (let i in this.cities) {
        cityIdx.push(i)
      }
      return cityIdx
    }
  }
}
</script>

<style scoped>
.cityWarp {
    position: absolute;
    top: 1.6rem;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}
.ul-list {
    overflow: hidden;
}
.ul-list .tit {
    font-size: 0.28rem;
    color: #666;
    background-color: #eee;
    line-height: 2;
    padding-left: 0.2rem;
}
.ul-list dl {
    padding-right: 0.6rem;
    overflow: hidden;
}
.ul-list dd {
    float: left;
    width: 33.33%;
}
.ul-list .con {
    box-sizing: border-box;
    text-align: center;
    line-height: 1.5;
    font-size: 0.24rem;
    border: 1px solid #ccc;
    border-radius: 0.06rem;
    margin: 0.1rem;
}
.ul-list .item-list{
    margin: .2rem 0;
}
.ul-list .item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.24rem;
    line-height: 1.8;
    padding-left: 0.2rem;
    border-bottom: 1px solid #e7e7e7;
}
/* 字母索引 */
.ul-zm{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.48rem;
    right: 0;
    bottom: 0;
    width: 0.6rem;
}
.ul-zm li{
    font-size: .24rem;
    line-height: 1.8;
    color: #999;
    text-align: center;
}
</style>
