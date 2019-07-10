<template>
    <swiper :options='swiperOption' v-if="showIcon">
        <!-- slides -->
        <swiper-slide v-for="(items, index) of pages" :key="index">
            <div class="nav">
                <ul>
                    <li v-for="item of items" :key="item.id">
                        <a href class="con">
                            <div class="pic">
                                <img :src="item.imgUrl" alt />
                            </div>
                            <div class="txt">{{item.desc}}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
  name: 'MainNav',
  props: ['iconList'],
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  // 利用计算属性对list进行计算，计算图标出现的页码数 8个一屏，超出的显示第二屏
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach(function (item, index) {
        const i = Math.floor(index / 8)
        if (!pages[i]) {
          pages[i] = []
        }
        pages[i].push(item)
      })
      return pages
    },
    showIcon () {
      return this.iconList.length
    }
  }
}
</script>

<style>
.nav {
    overflow: hidden;
}
.nav li {
    float: left;
    width: 25%;
}
.nav .con {
    display: block;
    padding-top: 0.1rem;
    text-align: center;
}
.nav .pic {
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: 0;
    overflow: hidden;
}
.nav .pic img {
    display: inline-block;
    vertical-align: middle;
    max-height: 100%;
}
.nav .txt {
    margin-top: 0.1rem;
    color: #212121;
    font-size: 0.28rem;
    height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
