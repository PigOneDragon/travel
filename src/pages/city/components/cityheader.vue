<template>
    <div id="city">
        <div class="header-city">
            <router-link to="/">
                <span class="iconfont cityHeadBack">&#xe624;</span>
            </router-link>
            城市查询
        </div>
    </div>
</template>

<script>
export default {
  name: 'cityheader'
}
</script>

<style scoped>
    .header-city{
        height: .86rem;
        line-height: .86rem;
        background-color: #00bcd4;
        padding: 0 .2rem;
        text-align: center;
        color: #fff;
        font-size: .32rem;
    }
    .cityHeadBack{
        float: left;
        color: #fff;
    }
</style>
