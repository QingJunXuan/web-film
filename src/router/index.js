import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List.vue'
import Detail from '@/components/Detail.vue'
import Search from '@/components/Search.vue'
import TopBar from '@/components/TopBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'topbar',
      component: TopBar,
      children: [
        {
          path: '/',
          name: 'List',
          component: List
        }, {
          path: '/detail',
          name: 'detail',
          component: Detail
        }, {
          path: '/search',
          name: 'search',
          component: Search
        }
      ]
    },
  ]
})
