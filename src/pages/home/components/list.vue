<template>
    <swiper :options='swiperOption'>
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
  data: function () {
    return {
      list: [{
        id: '1',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      },
      {
        id: '2',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e98eea7ed037b04a5af0250ca8a1abd7.png',
        desc: '少林寺'
      },
      {
        id: '3',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '吸水'
      },
      {
        id: '4',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '方特'
      },
      {
        id: '5',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e98eea7ed037b04a5af0250ca8a1abd7.png',
        desc: '园博园'
      },
      {
        id: '6',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '冰雪世界'
      },
      {
        id: '7',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '动物园'
      },
      {
        id: '8',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '演出'
      },
      {
        id: '9',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '海洋馆'
      },
      {
        id: '10',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '当地'
      }]
    }
  },
  // 利用计算属性对list进行计算，计算图标出现的页码数 8个一屏，超出的显示第二屏
  computed: {
    pages () {
      const pages = []
      this.list.forEach(function (item, index) {
        const i = Math.floor(index / 8)
        if (!pages[i]) {
          pages[i] = []
        }
        pages[i].push(item)
      })
      return pages
    }
  },
  swiperOption: {
    pagination: '.swiper-pagination',
    loop: true
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
