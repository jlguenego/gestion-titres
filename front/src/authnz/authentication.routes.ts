import { NOTFOUND_NAME } from '@/router/constants'
import type { NavigationGuard } from 'vue-router'
import { useAuthenticationStore } from './stores/AuthenticationStore'
import DatabaseView from './views/DatabaseView.vue'
import LoginView from './views/LoginView.vue'
import PrivilegeAddView from './views/PrivilegeAddView.vue'
import PrivilegeDetailView from './views/PrivilegeDetailView.vue'
import PrivilegeView from './views/PrivilegeView.vue'
import RoleView from './views/RoleView.vue'
import UserAddView from './views/UserAddView.vue'
import UserDetailView from './views/UserDetailView.vue'
import UserView from './views/UserView.vue'
import WelcomeView from './views/WelcomeView.vue'

const LOGIN_PATH = '/login'
const anonymousAllowedPaths = ['/', '/legal']

export const authenticationRoutes = [
  {
    path: LOGIN_PATH,
    name: 'login',
    component: LoginView,
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomeView,
    meta: { title: 'Bienvenue !' },
  },
  {
    path: '/forms/new-user',
    name: 'add-user',
    component: UserAddView,
  },
  {
    path: '/users/:username',
    name: 'user-detail',
    component: UserDetailView,
  },
  {
    path: '/users',
    name: 'users',
    component: UserView,
  },
  {
    path: '/privileges',
    name: 'privileges',
    component: PrivilegeView,
  },
  {
    path: '/forms/new-privilege',
    name: 'add-privilege',
    component: PrivilegeAddView,
  },
  {
    path: '/privileges/:name',
    name: 'privileges-detail',
    component: PrivilegeDetailView,
  },
  {
    path: '/roles',
    name: 'roles',
    component: RoleView,
  },
  {
    path: '/database',
    name: 'database',
    component: DatabaseView,
  },
]

export const authenticationGuard: NavigationGuard = (to) => {
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
