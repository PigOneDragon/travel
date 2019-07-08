<template>
    <ul class="ul-imgtxt1">
        <li v-for="item of infoList" :key="item.id">
            <a href="" class="con">
              <div class="pic">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="txt">
                  <h3>{{item.tit}}</h3>
                  <div class="desc">{{item.desc}}</div>
              </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'MainHot',
  data: function () {
    return {
      infoList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg',
        tit: '郑州打卡',
        desc: '日月轮回，孕育出新的美丽'
      },
      {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/d2/017059dd59b0ee.jpg_r_640x214_497664a4.jpg',
        tit: '城中碧玉万仙山',
        desc: '清幽山乡，人间仙境，世外桃源，雄壮而苍茫的红崖绝壁，妙曼而秀雅的山乡风韵，太行风光的典型代表'
      }]
    }
  }
}
</script>

<style>
  .ul-imgtxt1{
    margin-top: 0.2rem;
  }
  .ul-imgtxt1 .con{
    display: block;
    overflow: hidden;
    margin-bottom: .1rem;
  }
  .ul-imgtxt1 .pic{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 37.4375%;
  }
  .ul-imgtxt1 .pic img{
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
  }
  .ul-imgtxt1 .txt{
    padding: .14rem .2rem .2rem .2rem
  }
  .ul-imgtxt1 .txt h3{
      font-weight: normal;
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ul-imgtxt1 .txt .desc{
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
