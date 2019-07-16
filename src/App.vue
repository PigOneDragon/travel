<template>
    <div id="app">
      <!-- keep-alive 缓存数据，减少ajax请求，若请求数据未发生改变，不再次请求json数据，其提供了一个activated生命周期函数，该方法用于页面重新显示的时候触发，判断当前的请求是否变化，变化了重新带参发送请求 -->
        <keep-alive><router-view/></keep-alive>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
