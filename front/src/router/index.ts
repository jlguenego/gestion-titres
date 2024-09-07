import { authenticationGuard, authenticationRoutes } from '@/authnz/authentication.routes'
import { menuGuard } from '@/authnz/stores/MenuStore'
import { favoriteRoutes } from '@/favorites/favorite.routes'
import { documentRoutes } from '@/modules/documents/document.routes'
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
    ...favoriteRoutes,
    ...documentRoutes,
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
router.afterEach(menuGuard)

export default router
