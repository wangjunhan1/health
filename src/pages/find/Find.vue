<template>
    <div>
        <div class="header">
          <div class="title">健康百科</div>           
        </div>
        <div class="knowledge">
          <div class="p1">
            <img class="kimg" src="https://img.ydlcdn.com/file/2018/11/30/tzycp6f4um3ureou.jpg"/>
            <div class="k-title">健康坐姿小贴士</div>
            <p class="k-p">考察了一下市面上的各种坐姿矫正器，我发现，虽然款式很多，但基本分三大类：支架型、智能笔、可穿戴设备。其中有不少是我自己买过用过的，有些则是身边朋友孩子用过的。另外，同一种类型里的各个品牌款式，其实都差不多，我就是挑淘宝上销量比较高的几款买，没有特别推荐的牌子。
01
架型坐姿矫正器
这种矫正器最常见，价格一般从20多元到200多元不等，大致可以分为“支架型”或“长杆型”。原理都一样，就是用支架或长杆硬性隔出身体到书本的距离，孩子想近也近不了，而且即便孩子把头垂下来，也不可能太低。
</p>
          </div>
        </div>
        <find-weekend :list="weekendList"></find-weekend>
    </div>
</template>

<script>
    import FindWeekend from '@/components/find-com/weekend.vue'
    import axios from 'axios'

    export default {
      name: 'Find',
      components: {
        FindWeekend: FindWeekend
      },
      data () {
        return {
          weekendList: []
        }
      },
      mounted: function () {
        this.getHomeInfo()
      },
      methods: {
        getHomeInfo: function () {
          axios.get('@/../static/Datas/index.json')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.weekendList = data.weekendList
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    line-height: .5rem
    background: rgba(255, 255, 255, .8)
    color: black
    font-size: .5rem
    padding: .2rem 0
    .title
      margin-left: 2.8rem
  .knowledge
    margin-top: .2rem
    .p1
      margin-top: .3rem
      .kimg
        width: 100%
        height: 200px
      .k-title
        font-size: .5rem
        height: .6rem
        line-height: .6rem
        font-weight: bold
        text-align: center
        padding: .2rem 0
      .k-p
        margin-top: .3rem
        line-height: .5rem
        text-indent: .5rem
        padding: .2rem
</style>