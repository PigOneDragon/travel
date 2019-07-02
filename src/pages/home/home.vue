<template>
    <div>
        <header-com></header-com>
        <header-swiper></header-swiper>
    </div>
</template>
<script>
import HeaderCom from './components/header'
import HeaderSwiper from './components/swiper'

export default {
  name: 'home',
  components: {
    HeaderCom,
    HeaderSwiper
  }
}
</script>
<style>
</style>
