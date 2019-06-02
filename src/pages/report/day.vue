<template>
    <div>
        <div class="title">我的设备:</div>
        <ul>
            <li class="content">智能桌椅</li>
        </ul>
        <day-progress :dayInfo="dayInfo"></day-progress>
        <div class="bod">
            <div class="ag">
                <div class="left">
                    <div class="left-1"><span class="cont"><i class="iconfont">&#xe60e;</i><span class="hx">呼吸频率<br><br>{{dayInfo.hx}}</span></span></div>
                    <div class="left-2"><span class="cont"><i class="iconfont">&#xe614;</i><span class="hx">健康率<br><br>{{dayInfo.jkd}}</span></span></div>
                </div>
                <div class="right">
                    <div class="right-1"><span class="cont"><i class="iconfont">&#xe63a;</i><span class="hx">脉搏频率<br><br>{{dayInfo.mb}}</span></span></div>
                    <div class="right-2"><span class="cont"><i class="iconfont">&#xe632;</i><span class="hx">压力率<br><br>{{dayInfo.jz}}</span></span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DayProgress from './day-progress.vue'
    import {mapState} from 'vuex'
    export default {
      name: 'Day',
      components: {
          DayProgress
      },
      computed: {
          ...mapState(["dayInfo"])
      }
    }
</script>
<style lang="stylus" scoped>
    .title
        margin: .3rem auto 0.1rem auto 
        width: 2rem
        color: 	#FFFAFA
        font-size: .4rem
        font-weight: bold
    .content
        height: .55rem
        line-height: .55rem
        width: 60%
        margin: 0 auto
        list-style: disc
        font-size: .32rem
        color: white
        background: rgba(205, 92, 90, .5)
        border-bottom: 1px solid black
    .bod
        border: 1px solid white
        width: 85%
        border-radius: .2rem
        margin: 0 auto
        padding: .3rem 0
        .ag
            width: 85%
            margin: 0 auto
            border-radius: .2rem
            display: flex
            color: white
            .left
                width: 50%
                .left-1
                    height: 2rem
                    background: rgba(192, 192, 192, .5)
                    text-align: center
                    padding: .3rem 0
                    border-right: 1px solid black
                    .cont
                        font-size: .35rem
                        vertical-align: middle
                        .iconfont
                            font-size: .8rem
                            vertical-align: middle
                .left-2
                    height: 2rem
                    background: rgba(192, 192, 192, .5)
                    text-align: center
                    padding: .3rem 0
                    border-right: 1px solid black
                    .cont
                        font-size: .35rem
                        vertical-align: middle
                        .iconfont
                            font-size: .8rem
                            vertical-align: middle
            .right
                width: 50%
                .right-1
                    height: 2rem
                    background: rgba(192, 192, 192, .5)
                    text-align: center
                    padding: .3rem 0
                    .cont
                        font-size: .35rem
                        vertical-align: middle
                        .iconfont
                            font-size: .8rem
                            vertical-align: middle
                .right-2
                    height: 2rem
                    background: rgba(192, 192, 192, .5)
                    text-align: center
                    padding: .3rem 0
                    .cont
                        font-size: .35rem
                        vertical-align: middle
                        .iconfont
                            font-size: .8rem
                            vertical-align: middle
</style>