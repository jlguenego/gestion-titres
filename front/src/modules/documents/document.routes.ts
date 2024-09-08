import IntroductionView from './views/IntroductionView.vue'
import MenuView from './views/MenuView.vue'
import MenuDocDetails from './components/MenuDocDetails.vue'

export const documentRoutes = [
  {
    path: '/documentation/introduction',
    name: 'documentation/introduction',
    component: IntroductionView,
  },
  {
    path: '/documentation/menu',
    name: 'documentation/menu',
    component: MenuView,
  },
  {
    path: '/documentation/menu/:pathMatch(.*)*',
    name: 'documentation/menu/detail',
    component: MenuDocDetails,
  },
]
