import { authenticationGuard, authenticationRoutes } from '@/authnz/authentication.routes'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { NOTFOUND_NAME } from './constants'
import { responsiveGuard } from './ResponsiveGuard'
import { titleGuard } from './TitleGuard'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    ...authenticationRoutes,
    {
      path: '/legal',
      name: 'legal',
      component: () => import('../views/LegalView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: NOTFOUND_NAME,
      component: NotFoundView,
    },
  ],
})

router.beforeEach(authenticationGuard)
router.afterEach(titleGuard)
router.afterEach(responsiveGuard)

export default router
