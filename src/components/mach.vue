<template>
    <div class="col">
        <div class="back">
            <mach-header></mach-header>
            <div class="btn">
                <button class="btn1">查找设备</button>
                <button @click="getSbInfo()" class="btn1">扫一扫</button>
            </div>
        </div>
    </div>
</template>

<script>
    import MachHeader from './mach-com/mach-header';
    export default {
      name: 'Mach',
      components: {
        MachHeader
      },
      methods: {
          getSbInfo() {
            this.$store.dispatch('getSbInfo');
            this.$store.dispatch('getDayInfo');
            setTimeout(this.$router.replace('/home'), 5000);
        }
      },
      data() {
          return {
              sbInfo: {},  //设备信息
              dayInfo: {}, //每日健康数据
              score: '',
              cs: '',
              jz: '',
              hx: '',
              mb: '',
              jkd: '',
              time: '',
              sid: '',
              src: ''
          }
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
      .btn
        margin-top: .7rem
        height: 2rem
        .btn1
          margin-left: 1.3rem
          height: .8rem
          width: 1.8rem
          border-radius: .4rem
          background-color: #778899
          color: white
</style>