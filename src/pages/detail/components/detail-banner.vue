<template>
    <div class="container">
        <div class="box" @click="openImgs">
            <div class="pic">
                <img
                    src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
                    alt
                />
                <div class="txt">
                    <div class="num">
                        <i></i>
                        <em>39</em>
                    </div>
                    <span>故宫(AAAAA景区)</span>
                </div>
            </div>
        </div>
        <!-- 相簿组件 利用swiper实现 -->
        <gallary-img :imgs="imgs" @close="handGallaryClose" v-show="closeState"></gallary-img>
    </div>
</template>
<script>
// 引入公用的相簿组件
import GallaryImg from '../../../common/gallary/gallary'
export default {
  name: 'DetailBanner',
  components: {
    GallaryImg
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg', 'http://img1.qunarzz.com/sight/p0/1907/e4/e4a734b0c3fb9598a3.img.jpg_350x240_e0ec48d1.jpg'],
      closeState: false
    }
  },
  methods: {
    // 子组件显示时，点击相册，给改父组件传值，隐藏组件
    handGallaryClose () {
      this.closeState = false
    },
    openImgs () {
      this.closeState = true
    }
  }
}
</script>

<style scoped>
.box .pic {
    position: relative;
    height: 0;
    padding-top: 55%;
    overflow: hidden;
}
.box .pic img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
}
.box .pic .txt {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-left: 0.4rem;
    overflow: hidden;
    box-sizing: border-box;
}
.box .pic .txt span {
    line-height: 0.4rem;
    color: #fff;
    font-size: 0.36rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}
.box .pic .txt .num{
    float: right;
    margin-right: 0.4rem;
}
.box .pic .txt .num em{
    font-size: .24rem;
    color: #fff;
    line-height: .4rem;
    text-align: center;
}
</style>
