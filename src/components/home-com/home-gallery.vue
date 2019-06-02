<template>
  <div class="container">
    <div class="wrapper">
      <!--<swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
        <img class="swiper-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>-->
      <div class="title" @click="handleGalleryClick()">健康指南</div>
      <home-swiper></home-swiper>
    </div>
  </div>
</template>

<script>
import HomeSwiper from './home-swiper'
export default {
  name: 'HomeGallery',
  components: {
    HomeSwiper
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close');
    }
  }
  /*data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        oserver: true
      }
    }
  }*/
}
</script>

<style lang="stylus" scoped>
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: .9rem
    bottom: 0
    background-color: rgba(0, 0, 0, 0.5)
    width: 100%
    height: 86%
    padding: 0 .3rem
    .wrapper
      width: 100%
      height: 0
      border-radius: .2rem
      padding-bottom: 110%
      color: #fff
      background-color: white
      .title
        height: .6rem
        line-height: .6rem
        background-color: rgba(0, 206, 209, .6)
        border-radius: .1rem
        text-align: center
</style>
