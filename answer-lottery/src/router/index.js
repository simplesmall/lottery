import Vue from 'vue'
import Router from 'vue-router'
import EnterIndex from '@/components/EnterIndex'
import Answer from "../components/Answer";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EnterIndex',
      component: EnterIndex
    },
    {
      path: '/answer',
      name: 'Answer',
      component: Answer
    }
  ]
})
