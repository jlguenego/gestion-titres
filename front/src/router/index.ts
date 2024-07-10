import { authenticationRoutes } from '@/authnz/authentication.routes'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...authenticationRoutes,
    {
      path: '/legal',
      name: 'legal',
      component: () => import('../views/LegalView.vue')
    }
  ]
})

export default router
