<template>
    <div class="box">
      <ul class="hz">
        <li class="font1">
          <span class="left"><i class="iconfont">&#xe60e;</i><span class="hx">呼吸频率</span></span>
          <span class="right">{{info.hx}}</span>
        </li>
        <li class="font2">
          <span class="left"><i class="iconfont">&#xe653;</i><span class="sj">久坐时间</span></span>
          <span class="right">{{info.time}}</span>
        </li>
        <li class="font3">
          <span class="left"><i class="iconfont">&#xe63a;</i><span class="mb">脉搏频率</span></span>
          <span class="right">{{info.mb}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: 'StatusTable',
      props: {
        info: Object
      }
    }
</script>
<style lang="stylus" scoped>
  .box
    background: rgba(192, 192, 192, .5)
    //padding: .3rem
    width: 100%
    height: 3.9rem
    color: white
    display: flex
    justify-content: center
    .font1
      border-bottom: 2px solid white
      height: .9rem
      width: 7rem
      margin-top: .4rem
      .left
        float: left
        .iconfont
          font-size: .7rem
          vertical-align: middle
        .hx
          font-size: .35rem
          vertical-align: middle
      .right
        float: right
        font-size: .4rem
        margin-top: .1rem
    .font2
      border-bottom: 2px solid white
      height: .9rem
      width: 7rem
      margin-top: .4rem
      .left
        float: left
        .iconfont
          font-size: .7rem
          vertical-align: middle
        .sj
          font-size: .35rem
          vertical-align: middle
      .right
        float: right
        font-size: .4rem
        margin-top: .1rem
    .font3
      height: .9rem
      width: 7rem
      margin-top: .4rem
      .left
        float: left
        .iconfont
          font-size: .7rem
          vertical-align: middle
        .mb
          font-size: .35rem
          vertical-align: middle
      .right
        float: right
        font-size: .4rem
        margin-top: .1rem
</style>
