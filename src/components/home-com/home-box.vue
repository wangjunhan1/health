<template>
    <div class="box">
      <ul class="hz">
        <li class="font1">
          <span class="left">健康得分</span>
          <span class="right">{{info.score}}</span>
        </li>
        <li class="font2">
          <span class="left">舒展次数</span>
          <span class="right">{{info.cs}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: 'HomeBox',
      props: {
        info: Object
      }
    }
</script>
<style lang="stylus" scoped>
  .box
    background: rgba(192, 192, 192, .5)
    border-radius: .3rem
    padding: .5rem
    width: 6rem
    height: 2.5rem
    margin-top: .4rem
    margin: .5rem .8rem 0 .8rem
    font-size: .4rem
    color: white
    .font1
      border-bottom: 2px solid white
      height: .7rem
      width: 5rem
      .left
        float: left
      .right
        float: right
    .font2
      height: .7rem
      width: 5rem
      padding: .4rem 0 0 0
      .left
        float: left
      .right
        float: right
</style>
