<template>
    <div>
        <header-com></header-com>
        <header-swiper></header-swiper>
        <main-nav></main-nav>
        <main-rec></main-rec>
        <main-hot></main-hot>
    </div>
</template>
<script>
import HeaderCom from './components/header'
import HeaderSwiper from './components/swiper'
import MainNav from './components/list'
import MainRec from './components/rec'
import MainHot from './components/tuijian'

export default {
  name: 'home',
  components: {
    HeaderCom,
    HeaderSwiper,
    MainNav,
    MainRec,
    MainHot
  }
}
</script>
<style>
</style>
