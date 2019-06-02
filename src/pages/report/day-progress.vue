<template>
  <div class="fa">
      <div class="progress">
        <a-progress type="circle" :percent="dayInfo.score" :width="190" 
        :strokeWidth="5"
        :format="percent => `${percent} 分`"
        strokeColor=blue />  
      </div>
  </div>
</template>

<script type="text/javascript">
    import { Progress } from 'ant-design-vue'
    export default {
        name: 'DayProgress',
        components: {
          AProgress: Progress
        },
        props: {
          dayInfo: Object
        }
    }    
</script>

<style lang="stylus" scoped>
  .fa
    margin: .2rem auto
    .progress
      text-align: center
      position: relative
</style>