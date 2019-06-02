<template>
  <div>
    <week-choose1></week-choose1>
    <!-- 折线图 -->
    <div id="chartmainline"></div>
    <div class="ave"><span class="font1">本周健康得分</span><br><span class="font2">89</span></div>
    <div class="wrap">
        <span class="title">本周提示</span>
        <div class="pro">本周办公习惯非常棒，可以持续按照这个状态继续保持！<br> 很高兴您养成了健康办公习惯，愿永远健康</div>
    </div>
  </div>
</template>

<script>
import WeekChoose1 from './week-choose1.vue'
import {mapState} from 'vuex'
export default({
    name: 'Week',
    components: {
        WeekChoose1
    },
    computed: {
        ...mapState(["weekInfo"])
    },
    data(){
        return{
            optionline:{
                title:{
                    text:'本周健康走势',
                    textStyle: {
                        "color": "#FFFFFF"
                    }
                },
                tooltip:{},
                legend:{
                    data:['用户来源']
                },
                xAxis:{
                    data:["一","二","三","四","五","六","日"],
                    axisLine: {
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'white'
                        }
                    }
                },
                yAxis:{
                    axisLine: {
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'white'
                        }
                    }
                },
                series:[{
                    name:'访问量',
                    type:'line', //设置图表主题
                    data:[80,40,90,94,85,62,99]
                }]
            }
        }
    },
    mounted() {
       this.drawLine()
    },
    methods: {
      drawLine: function(){
        //基于准本好的DOM，初始化echarts实例
        let chartmainline = this.$echarts.init(document.getElementById("chartmainline"));
        //绘制图表
        chartmainline.setOption(this.optionline);
      }  
    }
})
</script>
<style lang="stylus" scoped>
    #chartmainline
        width: 7rem
        height: 4.5rem
        padding: .2rem .2rem
        margin: 0rem auto 
        border: 2px solid white
        border-radius: .3rem
    .ave
        color: white
        text-align: center
        margin-top: .5rem
        line-height: .6rem
        .font1
            font-size: .4rem
        .font2
            font-size: .5rem
    .wrap
        text-align: center
        margin-top: .2rem
        .title
            font-size: .3rem
            line-height: .3rem
            color: #DCDCDC
            background: rgba(0, 206, 209, .5)
        .pro
            text-align: center
            padding: .2rem .2rem
            font-size: .25rem
            color: white
            background: rgba(192, 192, 192, .5)
            width: 6rem
            height: 2rem
            border-radius: .2rem
            line-height: .4rem
            margin: .4rem auto
            word-break: break-all
</style>