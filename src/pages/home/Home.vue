<template>
    <div class="col">
        <div class="back">
            <div class="header">健康办公每一天</div>
            <home-box :info="sbInfo"></home-box>
            <home-img :info="sbInfo"></home-img>
            <transition>
              <home-gallery v-show="showGallery" @close="handleGalleryClose()"></home-gallery>
            </transition>
            <div class="bot" @click="handleBot()" v-show="showBot">点击展开</div>
        </div>
    </div>
</template>

<script>
    import HomeBox from './../../components/home-com/home-box'
    import HomeImg from './../../components/home-com/home-img'
    import HomeGallery from './../../components/home-com/home-gallery'
    import {mapState} from 'vuex'
    export default {
      name: 'Home',
      data () {
        return {
          showGallery: false,
          showBot: true
        }
      },
      components: {
        HomeBox,
        HomeImg,
        HomeGallery
      },
      computed: {
        ...mapState(["sbInfo"])
      },
      methods: {
        handleGalleryClose () {
          this.showGallery = false,
          this.showBot = true
        },
        handleBot() {
          this.showBot = false,
          this.showGallery = true
        }
      }   
    }
</script>
<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .6s
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
        background: rgba(255, 255, 255, .8)
        text-align: center
        font-size: 0.3rem
        line-height: .6rem
        height: .6rem
        width: 100%
      .bot
        background: rgba(0, 206, 209, .6)
        color: white
        margin: 0.8rem auto
        width: 90%
        height: .3rem
        border-radius: .05rem
        text-align: center
</style>
