import CurrentUserView from './views/CurrentUserView.vue'
import LoginView from './views/LoginView.vue'

export const authenticationRoutes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/current-user',
    name: 'current-user',
    component: CurrentUserView,
  },
]
