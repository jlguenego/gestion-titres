import { authenticationGuard, authenticationRoutes } from '@/authnz/authentication.routes'
import UserView from '@/views/UserView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import { NOTFOUND_NAME } from './constants'
import { titleGuard } from './TitleGuard'

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
    {
      path: '/:pathMatch(.*)*',
      name: NOTFOUND_NAME,
      component: NotFoundView,
      meta: { title: 'Page non trouvée' },
    },
  ],
})

router.beforeEach(authenticationGuard)
router.afterEach(titleGuard)

export default router
