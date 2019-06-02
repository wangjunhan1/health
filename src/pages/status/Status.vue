<template>
    <div class="col">
        <div class="back">
            <status-header></status-header>
            <status-progress :info="sbInfo"></status-progress>
            <status-table :info="sbInfo"></status-table>
        </div>
    </div>
</template>

<script>
  import StatusHeader from './../../components/status-com/status-header'
  import StatusProgress from './../../components/status-com/status-progress'
  import StatusTable from './../../components/status-com/status-table'
  import {mapState} from 'vuex'
  export default {
    name: 'Status',
    components: {
      StatusHeader,
      StatusProgress,
      StatusTable
    },
    computed: {
      ...mapState(["sbInfo"])
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
</style>