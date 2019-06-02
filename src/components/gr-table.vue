<template>
    <div class="wrap">
        <a-avatar class="ts" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" :size="180"/>
        <div class="box">
          <ul class="hz">
            <li class="font1">
              <span class="left">用户名</span>
              <span class="right">{{info.user_name}}</span>
            </li>
            <li class="font2">
              <span class="left">性别</span>
              <span class="right">{{info.user_xb}}</span>
            </li>
            <li class="font3">
              <span class="left">年龄</span>
              <span class="right">{{info.user_age}}</span>
            </li>
            <li class="font4">
              <span class="left">体重</span>
              <span class="right">{{info.user_tz}}KG</span>
            </li>
            <li class="font5">
              <span class="left">身高</span>
              <span class="right">{{info.user_sg}}CM</span>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
    import { Avatar } from 'ant-design-vue'
    export default {
      name: 'GrTable',
      components: {
        AAvatar: Avatar
      },
      props: {
        info: Object
      }
    }
</script>
<style lang="stylus" scoped>
    .wrap
      text-align: center
      .ts
        width: 100%
        height: 100%
      .box
        background: rgba(192, 192, 192, .5)
        margin: .5rem .25rem 0 .25rem
        border-radius: .2rem
        //padding: .3rem
        width: 7rem
        height: 6.5rem
        font-size: .4rem
        color: white
        display: flex
        justify-content: center
        .font1
          border-bottom: 2px solid white
          height: .9rem
          width: 6.5rem
          margin-top: .4rem
          .left
            float: left
          .right
            float: right
        .font2
          border-bottom: 2px solid white
          height: .9rem
          width: 6.5rem
          margin-top: .4rem
          .left
            float: left
          .right
            float: right
        .font3
          border-bottom: 2px solid white
          height: .9rem
          width: 6.5rem
          margin-top: .4rem
          .left
            float: left
          .right
            float: right
        .font4
          border-bottom: 2px solid white
          height: .9rem
          width: 6.5rem
          margin-top: .4rem
          .left
            float: left
          .right
            float: right
        .font5
          height: .9rem
          width: 6.5rem
          margin-top: .4rem
          .left
            float: left
          .right
            float: right
</style>