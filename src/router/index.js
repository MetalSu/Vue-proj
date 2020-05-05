import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Activity from '../views/Activity'
import Login from '../views/Login'
import My from '../views/My'
import Raise from '../views/Raise'
import Rim from '../views/Rim'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    { path: '/activity', component: Activity },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/raise', component: Raise },
    { path: '/rim', component: Rim },
    { path: '/search', component: Search },
    { path: '/searchresult', component: SearchResult },
    { path: '/', redirect: '/home' }
  ]

})

export default router
