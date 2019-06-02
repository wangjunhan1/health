<template>
  <div>
    <div class="img">
      <img class="cont" v-if="info.score" :src="info.src" />
      <img class="cont" v-else src="./../../../static/img/zz.png" />
    </div>
    <router-link tag="div" to="/home/mach" class="btn">
      <button class="sty" v-if="info.score">设备已连接</button>
      <button class="sty" v-else >未连接设备 <br> 点击连接</button>
    </router-link>
  </div>
</template>

<script>
    export default {
      name: 'HomeImg',
      props: {
        info: Object
      }
    }
</script>
<style lang="stylus" scoped>
  .img
    position: relative
    height: 7rem
    width: 6rem
    left: .6rem
    .cont
      height: 100%
      width: 100%
  .btn
    position: absolute
    left: 2.8rem
    right: 0
    bottom: 2.5rem
    .sty
      background: rgba(0, 0, 0, 0)
      font-size: .35rem
      color: white
</style>