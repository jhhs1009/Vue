import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NoColor from '../views/Nocolor.vue'
import NotFound404 from '../views/404.vue'
import SsaFling from '../views/Ssafling.vue'
import SsaFleaf from '../views/Ssafleaf.vue'
import SsaFlower from '../views/Ssaflower.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/nocolor',
    name: 'nocolor',
    component: NoColor
  },
  {
    path: '/ssafling',
    name: 'ssafling',
    component: SsaFling
  },
  {
    path: '/ssafleaf',
    name: 'ssafleaf',
    component: SsaFleaf
  },
  {
    path: '/ssaflower',
    name: 'ssaflower',
    component: SsaFlower
  },
  {
    path: '/404',
    name: 'notfound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
