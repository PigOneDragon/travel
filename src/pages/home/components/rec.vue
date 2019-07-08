<template>
    <ul class="ul-imgtxt">
        <li v-for="item of infoList" :key="item.id">
            <a href="" class="con">
              <div class="pic">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="txt">{{item.desc}}</div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'MainRec',
  data: function () {
    return {
      infoList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts4/1905/9b/eac01dc7a4cf3f02.jpg_160x160_b20761e0.jpg',
        desc: '八达岭长城+鸟巢'
      }]
    }
  }
}
</script>

<style>
  .ul-imgtxt .con{
    display: block;
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
  .ul-imgtxt .txt {
    padding-top: .4rem;
    overflow: hidden;
    font-size: .36rem;
    color: #000;
    line-height: 1.8;
  }
</style>
