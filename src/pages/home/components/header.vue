<template>
    <div class="header">
        <div class="hl">
            <div class="iconfont">&#xe624;</div>
        </div>
        <div class="inp"><span class="iconfont">&#xe632;</span>请输入。。</div>
        <div class="hr">{{city}}<span class="iconfont">&#xe64a;</span></div>
    </div>
</template>

<script>
export default {
  name: 'headercom',
  props: ['city']
}
</script>

<style>
.header {
    background-color: #00bcd4;
    line-height: 0.86rem;
    display: flex;
    color: #fff;
}
.hl {
    float: left;
    width: 0.64rem;
}
.hr{
    float: right;
    width: 1.24rem;
    text-align: center;
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
