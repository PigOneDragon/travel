<template>
    <div class="box" @click="handClose">
        <div class="wrap">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="item of imgs" :key="item.id">
                    <img class="pic1" :src="item" alt />
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
// 定义一个公用的相簿组件，显示的图片从父组件接收参数
export default {
  name: 'gallary',
  props: {
    imgs: Array,
    default () {
      return []
    }
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        // 当显示隐藏时由于DOM结构发生变化，插件的宽度计算有误，需要刷新下swiper插件
        // observer当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。将observe应用于Swiper的父元素。observeParents当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handClose () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="less">
.box {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .wrap {
        padding-top: 100%;
        width: 100%;
        height: 0;
        overflow: hidden;
        position: relative;
        .swiper-container{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            .swiper-pagination{
              font-size: .28rem;
              color: #fff;
            }
            .pic1 {
              width: 100%;
            }
        }
    }
}
</style>
