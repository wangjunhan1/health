import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Mach from '@/components/mach.vue'
import Status from '@/pages/status/Status.vue'
import Mine from '@/pages/mine/Mine.vue'
import Gr from '@/components/gr.vue'
import Find from '@/pages/find/Find.vue'
import Report from '@/pages/report/Report.vue'
import Login from '@/pages/login/Login.vue'
import SelectLogin from '@/pages/login/SelectLogin.vue'
import Day from '@/pages/report/day.vue'
import Week from '@/pages/report/week.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {showBottomTabBar: true}
    },     {
      path: '/home/mach',
      name: 'Mach',
      component: Mach,
      meta: {showBottomTabBar: false}
    },{
      path: '/status',
      name: 'status',
      component: Status,
      meta: {showBottomTabBar: true}
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {showBottomTabBar: true}
    }, {
      path: '/mine/gr',
      name: 'Gr',
      component: Gr,
      meta: {showBottomTabBar: false}
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/find',
      name: 'Find',
      component: Find,
      meta: {showBottomTabBar: true}
    }, {
      path: '/report',
      name: 'Report',
      component: Report,
      children: [
        {
          path: 'day',
          component: Day,
          meta: {showBottomTabBar: true}
        },
        {
          path: 'week',
          component: Week,
          meta: {showBottomTabBar: true}
        },
        {
          path: '/report',
          redirect: '/report/day'
        }
      ]
    }, {
      path: '/',
      redirect: '/mine'
    }
  ]
})
