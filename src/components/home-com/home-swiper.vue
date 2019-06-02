<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://img.ydlcdn.com/file/2019/05/22/8mojbh2gn6btyx41.jpeg" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="https://img.ydlcdn.com/file/2019/03/28/qfe06fcbd9pnzjs1.jpg" alt="" width="100%">22222</div>
            <div class="swiper-slide"><img src="https://img.ydlcdn.com/file/2019/03/29/cr4qmp9xxiqah2iy.jpg" alt="" width="100%">3333</div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script type="text/javascript">
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    export default {
        name: 'HomeSwiper',
        mounted() {
            new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                }
            })        
        }
    }    
</script>

<style lang="stylus" scoped>
    .swiper-container
        margin-top: .4rem
</style>