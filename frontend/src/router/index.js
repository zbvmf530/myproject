import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerView.vue')
  },
  {
    path: '/insertcustomer',
    name: 'insertcustomer',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerInsertView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
