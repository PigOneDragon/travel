<template>
    <ul class="ul-imgtxt">
      <!-- 点击跳转至详情页，利用route-link的tag，属性，将要点击的元素绑定在链接上，减少写默认a的样式 -->
      <!-- 静态绑定路径 to="/跳转页" -->
      <!-- 动态绑定路径 to=" '/跳转页/' + 参数 " -->
        <router-link
         v-for="item of recList"
         :key="item.id"
         tag:="li"
         :to=" '/detail/' + item.id "
         >
            <div class="con">
              <div class="pic">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="tit">{{item.title}}</div>
              <div class="txt">{{item.desc}}</div>
            </div>
        </router-link>
    </ul>
</template>

<script>
export default {
  name: 'MainRec',
  props: ['recList']
  /*  data: function () {
    return {
      infoList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts4/1905/9b/eac01dc7a4cf3f02.jpg_160x160_b20761e0.jpg',
        desc: '八达岭长城+鸟巢'
      }]
    }
  } */
}
</script>

<style>
  .ul-imgtxt .con{
    overflow: hidden;
    margin: 0 .2rem;
  }
  .ul-imgtxt .pic{
    float: left;
    width: 2rem;
    height: 2rem;
    border-radius: .2rem;
    overflow: hidden;
    margin-right: .3rem;
  }
  .ul-imgtxt .pic img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .ul-imgtxt .tit {
    padding-top: .2rem;
    overflow: hidden;
    font-size: .36rem;
    color: #000;
    line-height: 1.8;
  }
  .ul-imgtxt .txt{
    font-size: .28rem;
  }
</style>
