<template>
    <div class="header">
        <div class="hl">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="inp"><span class="iconfont">&#xe632;</span>请输入。。</div>
        <router-link to="/city">
        <!-- 通过vuex在各组件传值 -->
            <div class="hr">{{this.$store.state.city}}<span class="iconfont">&#xe64a;</span></div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'headercom'
}
</script>

<style>
.header {
    background-color: #00bcd4;
    line-height: 0.86rem;
    display: flex;
    color: #fff;
    padding: 0 .2rem;
}
.hl {
    float: left;
    width: 0.64rem;
}
.hr{
    float: right;
    min-width: 1.24rem;
    text-align: center;
    color: #fff;
}
.inp{
    flex-grow: 1;
    height: 0.64rem;
    /* margin-top: 0.11rem; */
    line-height:  0.64rem;
    background-color: #fff;
    border-radius: 5px;
    margin: 0.11rem .2rem 0;
    color: #ccc;
}
</style>
