import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Detail from '@/components/Detail.vue'
import Search from '@/components/Search.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/detail',
      name: 'detail',
      component: Detail
    },{
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
