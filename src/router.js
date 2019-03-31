import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cliente from './views/Cliente'
import Conta from './views/Conta'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cliente',
      name: 'cliente',
      component: Cliente
    },
    {
      path: '/conta',
      name: 'conta',
      component: Conta
    }
  ]
})
