import IntroductionView from './views/IntroductionView.vue'
import MenuView from './views/MenuView.vue'

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
]
