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
  },
  {
    path: '/loginForm',
    name: 'loginForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginForm.vue')
  },
  {
    path: '/board',
    name: 'board',
    component: () => import(/* webpackChunkName: "about" */ '../views/BoardView.vue')
  },
  {
    path: '/updateBoardForm/:no',
    name: 'updateBoardForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateBoardForm.vue')
  },
  {
    path: '/addBoardForm',
    name: 'addBoardForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/InsertBoardForm.vue')
  },
  {
    path: '/vuetify',
    name: 'vuetify',
    component: () => import(/* webpackChunkName: "about" */ '../views/VuetifyView.vue')
  },
    {
    path: '/composition',
    name: 'composition',
    component: () => import(/* webpackChunkName: "about" */ '../components/CompositionDataBinding.vue')
  },
  {
    path: '/compositionMouse',
    name: 'compositionMouse',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionMouseView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
