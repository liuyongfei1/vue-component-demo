import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComponentDemo from '@/components/ComponentDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/component',
      name: 'ComponentDemo',
      component: ComponentDemo
    }
  ]
})
