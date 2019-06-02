<template>
  <div class="wrap">
    <div class="lie">
      <span class="font">设备</span>
      <div class="tab">
        <span class="left">设备</span><span class="right">未连接</span>
      </div>
    </div>
    <div class="lie">
      <span class="font">电池</span>
      <div class="tab">
        <span class="left">电池电量</span><span class="right">未连接</span>
      </div>
    </div>
    <div class="lie">
      <span class="font">个人信息</span>
      <router-link tag="div" class="tab" to="/mine/gr">
        <span class="right">查看</span>
      </router-link>
    </div>
    <div class="lie">
      <span class="font">提醒设置</span>
      <div class="tab">
        <span class="left">办公时间过长提醒</span><span class="right">未连接</span>
      </div>
    </div>
    <div class="lie">
      <span class="font">震动设置</span>
      <div class="tab">
        <span class="left">震动强度</span><span class="right">未连接</span>
      </div>
    </div>
    <div class="lie">
      <span class="font">灵敏度数据</span>
      <div class="tab">
        <span class="left">设备灵敏度</span><span class="right">未连接</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'SetTable'
    }
</script>
<style lang="stylus" scoped>
  .wrap
    color: white
    .lie
      width: 6.4rem
      margin: 0 auto
      margin-top: .5rem
      .font
        font-size: .35rem
      .tab
        font-size: .3rem
        border-radius: .2rem
        height: .9rem
        line-height: .9rem
        padding: 0 .2rem
        margin-top: .2rem
        background: rgba(192, 192, 192, .5)
        .right
          float: right
  /*.box
    background: rgba(192, 192, 192, .5)
    //padding: .3rem
    width: 100%
    height: 3.9rem
    font-size: .4rem
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
      .right
        float: right
    .font2
      border-bottom: 2px solid white
      height: .9rem
      width: 7rem
      margin-top: .4rem
      .left
        float: left
      .right
        float: right
    .font3
      height: .9rem
      width: 7rem
      margin-top: .4rem
      .left
        float: left
      .right
        float: right*/
</style>