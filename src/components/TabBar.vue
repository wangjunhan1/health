<template>
  <div class="bottom-tab">
    <span class="tab-item" @click="switchTo('/home')">
      <img class="img" :src="$route.path.includes('/home') ? tabBarImgArr[0].selected : tabBarImgArr[0].normal">
      <span :class="{on: '/home' === $router.path}">首页</span>
    </span>
    <span class="tab-item" @click="switchTo('/status')">
      <img class="img" :src="$route.path.includes('/status') ? tabBarImgArr[1].selected : tabBarImgArr[1].normal">
      <span :class="{on: '/status' === $router.path}">状况</span>
    </span>
    <span class="tab-item" @click="switchTo('/report')">
      <img class="img" :src="$route.path.includes('/report') ? tabBarImgArr[2].selected : tabBarImgArr[2].normal">
      <span :class="{on: '/report' === $router.path}">报告</span>
    </span>
    <span class="tab-item" @click="switchTo('/find')">
      <img class="img" :src="$route.path.includes('/find') ? tabBarImgArr[3].selected : tabBarImgArr[3].normal">
      <span :class="{on: '/find' === $router.path}">发现</span>
    </span>
    <span class="tab-item" @click="switchTo('/mine')">
      <img class="img" :src="$route.path.includes('/mine') ? tabBarImgArr[4].selected : tabBarImgArr[4].normal">
      <span :class="{on: '/mine' === $router.path}">我的</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      tabBarImgArr: [
        { normal: require('@/../static/img/icon_home.png'), selected: require('@/../static/img/icon_home_selected.png')},
        { normal: require('@/../static/img/icon_status.png'), selected: require('@/../static/img/icon_status_selected.png')},
        { normal: require('@/../static/img/icon_report.png'), selected: require('@/../static/img/icon_report_selected.png')},
        { normal: require('@/../static/img/icon_find.png'), selected: require('@/../static/img/icon_find_selected.png')},
        { normal: require('@/../static/img/icon_mine.png'), selected: require('@/../static/img/icon_mine_selected.png')}
      ]
    }
  },
  methods: {
    switchTo(path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bottom-tab
    width: 100%
    height: 1rem
    background-color: rgba(192, 192, 192, 1)
    position: fixed
    left: 0
    bottom: 0
    display: flex
    z-index: 999
    .tab-item
      display: flex
      flex: 1
      flex-direction: column
      align-items: center
      justify-content: center
      font-size: 0.28rem
      color: #666
      .img
        width: 35%
        margin-bottom: 2px
      .on
        color: red
</style>
