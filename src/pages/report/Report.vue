<template>
    <div class="col">
        <div class="back">
            <!--<div class="header">健康报告</div>-->
            <ly-tab
              v-model="selectedId"
              :items="items"
              :options="options"
              @change="handleChange"
            ></ly-tab>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'Report',
      data () {
        return {
          selectedId: 0,
          items: [
            {label: '每日'},
            {label: '每周'}
          ],
          options: {
              activeColor: '#e9232c'   //设置选中颜色
          },
          subRouterUrl: ['/report/day', '/report/week']
        }
      },
      methods: {
        handleChange(item, index) {
          this.$router.replace(this.subRouterUrl[index])
        }
      }
    }
</script>
<style lang="stylus" scoped>
  .col
    background: url(./../../assets/123.jpg)  no-repeat
    width: 100%
    height: 100%
    position: absolute
    .back
      background-color: rgba(0, 0, 0, 0.5)
      width: 100%
      height: 100%
      .header
        background: white
        text-align: center
        font-size: 0.5rem
        line-height: .9rem
        height: .9rem
        width: 100%
      .ly
        color: black
</style>
