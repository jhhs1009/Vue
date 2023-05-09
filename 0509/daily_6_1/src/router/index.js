import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/AllTodoPage.vue'
// import Today from '../views/TodayTodoPage.vue'
// import Important from '../views/ImportantTodoPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component : All
  },
  {
    path: '/today',
    name: 'today',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TodayTodoPage.vue')
  },
  {
    path: '/important',
    name: 'important',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ImportantTodoPage.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
