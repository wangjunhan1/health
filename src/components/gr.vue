<template>
    <div class="col">
        <div class="back">
          <div class="header">
            <router-link tag="span" to="/mine" class="bac">&#xe606;</router-link>
            <span class="header-title">个人中心</span>
          </div>
          <gr-table :info="userInfo"></gr-table>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import GrTable from './gr-table.vue'
    export default {
      name: 'Gr',
      computed: {
        ...mapState(["userInfo"])
      },
      components: {
        GrTable
      }
    }
</script>
<style lang="stylus" scoped>
  .col
    background: url(./../assets/123.jpg)  no-repeat
    width: 100%
    height: 100%
    position: absolute
    .back
      background-color: rgba(0, 0, 0, 0.5)
      width: 100%
      height: 100%
      .header
        overflow: hidden
        background: rgba(255, 255, 255, .8)
        font-size: .3rem
        color: black
        line-height: .6rem
        .bac
          font-size: .3rem
          color: grey
        .header-title
          text-align: center
          margin-left: 2.6rem
</style>