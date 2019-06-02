<template>
	<div>
		<div class="weekend-title">健康减压好去处</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-content">{{item.content}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      weekendList: [{
        id: '00001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
        title: '承载杭城的历史之地',
        content: '饱经沧桑的地方诉述着这座城的段段衷肠'
      }, {
        id: '00002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a3/9c9d78e925e8bc.jpg_r_640x214_74656d68.jpg',
        title: '泡汤好去处',
        content: '泡在氤氲的温泉中，聆听冬天脚步的声音'
      }, {
        id: '00003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/c1/afe3ab32b3bc23.jpg_r_640x214_beb61760.jpg',
        title: '青山秀水，精致暖汤',
        content: '天然高品质温泉，这个冬天秀美容颜首选'
      }, {
        id: '00004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
        title: '美丽普陀山',
        content: '细数温州那些美到陶醉的赏秋地'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .weekend-title
   line-height: .8rem
   text-indent: .2rem
   font-size: .3rem
   color: black
   background: #d0d0d0
   font-weight: bold
  .item-img-wrapper
   overflow: hidden
   height: 0
   padding-bottom: 37.1%
   margin-top: .1rem
   .item-img
     width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .48rem
      text-indent: .2rem
    .item-content
      line-height: .42rem
      text-indent: .2rem
      font-size: .24rem
      color: #616161
</style>
