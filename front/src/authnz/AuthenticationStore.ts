import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface User {
  username: string
  displayName: string
}

export interface UserCredentials {
  username: string
  password: string
}

export const BAD_LOGIN = 'Mauvais login/mot de passe'

export const useAuthenticationStore = defineStore('authentication', () => {
  const user = ref<User | undefined>(undefined)
  const isAuthenticated = computed(() => user.value !== undefined)
  async function login(credentials: UserCredentials) {
    if (credentials.username === 'admin' && credentials.password === '1234') {
      user.value = {
        username: credentials.username,
        displayName: 'Jean-Louis GUENEGO',
      }
      return
    }
    throw new Error(BAD_LOGIN)
  }

  return { user, isAuthenticated, login }
})
