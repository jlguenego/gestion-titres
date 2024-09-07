import FavoriteView from './views/FavoriteView.vue'
import AboutView from './views/AboutView.vue'

export const helpRoutes = [
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoriteView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
]
