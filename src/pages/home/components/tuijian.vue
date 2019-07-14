<template>
    <ul class="ul-imgtxt1">
        <li v-for="item of weekList" :key="item.id">
            <a href="" class="con">
              <div class="pic">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="txt">
                  <h3>{{item.title}}</h3>
                  <div class="desc">{{item.desc}}</div>
              </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'MainHot',
  props: ['weekList']
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
