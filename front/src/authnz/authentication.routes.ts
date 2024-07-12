import { NOTFOUND_NAME } from '@/router/constants'
import type { NavigationGuard } from 'vue-router'
import { useAuthenticationStore } from './AuthenticationStore'
import CurrentUserView from './views/CurrentUserView.vue'
import LoginView from './views/LoginView.vue'
import UserAddView from './views/UserAddView.vue'

const LOGIN_PATH = '/login'
const anonymousAllowedPaths = ['/', '/legal']

export const authenticationRoutes = [
  {
    path: LOGIN_PATH,
    name: 'login',
    component: LoginView,
  },
  {
    path: '/current-user',
    name: 'current-user',
    component: CurrentUserView,
  },
  {
    path: '/users/add',
    name: 'add-user',
    component: UserAddView,
  },
]

export const authenticationGuard: NavigationGuard = (to) => {
  console.log('to: ', to)

  if (to.name === NOTFOUND_NAME) {
    return true
  }

  const authenticationStore = useAuthenticationStore()
  if (authenticationStore.user === undefined) {
    if (![...anonymousAllowedPaths, LOGIN_PATH].includes(to.path)) {
      return LOGIN_PATH
    }
  }
  return true
}
