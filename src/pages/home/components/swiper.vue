<template>
    <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for='item of imgList' :key='item.id'>
            <img class='pic' :src='item.imgUrl' alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
  name: 'headerswiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop:true
      },
      imgList: [{
        id: '01',
        imgUrl: 'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png'
      },
      {
        id: '02',
        imgUrl: 'https://simg1.qunarzz.com/site/images/wap/home/recommend/20160509_banner_750x376.jpg'
      }]
    }
  }
}
</script>
<style>
    .swiper-slide{
        height: 3.75rem;
    }
    .pic{
        display: block;
        width: 100%;
    }
</style>
