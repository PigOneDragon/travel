<template>
<!-- v-if添加在sweiper-slide组件外的sweiper上 -->
    <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for='item of swiperList' :key='item.id'>
            <img class='pic' :src='item.imgUrl' alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
  name: 'headerswiper',
  props: ['swiperList'],
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
      /* imgList: [{
        id: '01',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1707/6a/ef538175bc41a802.jpg'
      },
      {
        id: '02',
        imgUrl: 'https://simg1.qunarzz.com/site/images/wap/home/recommend/20160509_banner_750x376.jpg'
      }] */
    }
  },
  //  添加该计算属性，使轮播创建时传过来的是完整数组而不是为获取到数据的空数组（导致轮播直接显示最后一个）
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style scoped>
  .swiper-slide{
        height: 2.34rem;
    }
    .pic{
        display: block;
        width: 100%;
    }
</style>
