import { authenticationRoutes } from '@/authnz/authentication.routes'
import UserView from '@/views/UserView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import { useAuthenticationStore } from '@/authnz/AuthenticationStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    ...authenticationRoutes,
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/users',
      name: 'users',
      component: UserView,
    },
    {
      path: '/legal',
      name: 'legal',
      component: () => import('../views/LegalView.vue'),
    },
  ],
})

// authentication guards
router.beforeEach((to) => {
  const authenticationStore = useAuthenticationStore()
  if (authenticationStore.user === undefined) {
    const anonymousAllowedPaths = ['/', '/login']
    if (!anonymousAllowedPaths.includes(to.path)) {
      return false
    }
  }
  return true
})

export default router
