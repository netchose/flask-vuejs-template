import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Api from './views/Api.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/api',
    name: 'api',
    component: Api
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
