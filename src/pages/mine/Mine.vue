<template>
	<div class="col">
	  <div class="back">
      <set-header v-if="userInfo.id"></set-header>
      <set-table v-if="userInfo.id"></set-table>
      <select-login v-else />
      <div class="fu">
        <button class="btn" @click="dealLagout()" v-if="userInfo.id">退出登录</button>
      </div>
      <div class="wu"></div>
    </div>
	</div>
</template>

<script>
import SelectLogin from './../login/SelectLogin.vue'
import SetHeader from './../../components/mine-com/set-header'
import SetTable from './../../components/mine-com/set-table'
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name: 'mine',
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    SelectLogin,
    SetHeader,
    SetTable
  },
  methods: {
    ...mapActions(["Logout"]),
    dealLagout() {
      let result = this.Logout({});
      this.$router.replace('/login');
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
      .fu
        text-align: center
        padding: 1.2rem 0
        .btn         
          background-color: rgba(0, 0, 0, 0.5)
          color: white
          border-radius: .2rem
          width: 3rem
          font-size: .4rem
  </style>