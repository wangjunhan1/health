<template>
	<div>
    <div v-if="userInfo.id">zhu</div>
    <select-login v-else />
	</div>
</template>

<script>
import SelectLogin from './../login/SelectLogin.vue'
import {mapState} from 'vuex'
export default {
  name: 'mine',
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    SelectLogin
  }
}
</script>
<style lang="stylus" scoped>

</style>