<template>
    <div>
        <header-com></header-com>
        <header-swiper></header-swiper>
        <main-nav></main-nav>
    </div>
</template>
<script>
import HeaderCom from './components/header'
import HeaderSwiper from './components/swiper'
import MainNav from './components/list'

export default {
  name: 'home',
  components: {
    HeaderCom,
    HeaderSwiper,
    MainNav
  }
}
</script>
<style>
</style>
