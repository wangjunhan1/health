<template>
  <div id="app">
    <router-view/>
    <tab-bar v-show="$route.meta.showBottomTabBar"></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue'

export default {
  name: 'App',
  created() {
    this.$store.dispatch('getUserInfo')
  },
  components: {
    TabBar
  }
}
</script>

<style>

</style>
