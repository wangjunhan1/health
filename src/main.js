// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import fastClick from 'fastClick'
import store from './store'
import LyTab from 'ly-tab'
import { Progress } from 'ant-design-vue'
import { Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
import 'ant-design-vue/dist/antd.css'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.component(Progress.name, Progress)
Vue.component(Toast.name, Toast)
Vue.use(Mint)
Vue.use(LyTab)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
