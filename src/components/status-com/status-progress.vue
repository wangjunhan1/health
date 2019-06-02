<template>
  <div>
      <div class="progress">
        <a-progress type="circle" :percent="info.jz" :width="280" :gapDegree="150" 
        :strokeWidth="5"
        strokeColor="#D2691E"
        gapPosition="bottom"/>  
      </div>      
      <div class="fit">紧张率</div>
  </div>
</template>

<script type="text/javascript">
    import { Progress } from 'ant-design-vue'
    export default {
        name: 'StatusProgress',
        components: {
            AProgress: Progress
        },
        props: {
          info: Object
        }
    }    
</script>

<style lang="stylus" scoped>
    .progress
      margin-top: .8rem
      text-align: center
      position: relative
    .fit
      margin-top: .5rem
      height: .3rem
      font-size: .5rem
      line-height: .3rem
      text-align: center
      color: white
      position: absolute
      top: 5rem
      left: 2.9rem
</style>