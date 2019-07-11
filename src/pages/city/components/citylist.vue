<template>
    <div id="citylist" class="cityWarp" ref="wrapper">
        <ul class="ul-list">
            <li>
                <div class="tit">当前位置</div>
                <dl>
                    <dd>
                        <div class="con">北京</div>
                    </dd>
                </dl>
            </li>
            <li>
                <div class="tit">热门城市</div>
                <dl>
                    <dd v-for="item of hotCities" :key="item.id">
                        <div class="con">{{item.name}}</div>
                    </dd>
                </dl>
            </li>
            <!-- 对象的key值相当于字典的键 -->
            <li v-for="(items, key) of cities" :key="key">
                <div class="tit">{{key}}</div>
                <div class="item-list">
                    <div class="item" v-for="item of items" :key="item.id">{{item.name}}</div>
                </div>
            </li>
        </ul>
        <ul class="ul-zm">
            <li v-for="(items, key) of cities" :key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'citylist',
  props: {
    hotCities: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped>
.cityWarp {
    position: absolute;
    top: 0.86rem;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}
.ul-list {
    overflow: hidden;
}
.ul-list .tit {
    font-size: 0.28rem;
    color: #666;
    background-color: #eee;
    line-height: 2;
    padding-left: 0.2rem;
}
.ul-list dl {
    padding-right: 0.6rem;
    overflow: hidden;
}
.ul-list dd {
    float: left;
    width: 33.33%;
}
.ul-list .con {
    box-sizing: border-box;
    text-align: center;
    line-height: 1.5;
    font-size: 0.24rem;
    border: 1px solid #ccc;
    border-radius: 0.06rem;
    margin: 0.1rem;
}
.ul-list .item-list{
    margin: .2rem 0;
}
.ul-list .item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.24rem;
    line-height: 1.8;
    padding-left: 0.2rem;
    border-bottom: 1px solid #e7e7e7;
}
/* 字母索引 */
.ul-zm{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.48rem;
    right: 0;
    bottom: 0;
    width: 0.6rem;
}
.ul-zm li{
    font-size: .24rem;
    line-height: 1.8;
    color: #999;
    text-align: center;
}
</style>
