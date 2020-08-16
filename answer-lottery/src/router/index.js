import Vue from 'vue'
import Router from 'vue-router'
import EnterIndex from '@/components/EnterIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EnterIndex',
      component: EnterIndex
    }
  ]
})
