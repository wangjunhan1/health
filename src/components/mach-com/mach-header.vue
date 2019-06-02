<template>
    <div class="header">
        <router-link to="/home">
          <div class="left"><i class="iconfont">&#xe606;</i></div>
        </router-link>
        <div class="header-title">设备选择</div>
    </div>
</template>

<script>
export default {
  name: 'MachHeader'
}
</script>

<style  lang="stylus" scoped>
  .header
    overflow: hidden
    background: rgba(255, 255, 255, .8)
    font-size: .3rem
    color: black
    line-height: .6rem
    height: .6rem
    .left 
      float: left
      width: .8rem
      text-align: center
      color: grey
      .iconfont
        font-size: .4rem
    .header-title
      text-align: center
      margin: 0 1rem
</style>