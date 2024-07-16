import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api } from '../api/api'
import type { User } from '../interfaces/User'
import type { UserCredentials } from '../interfaces/UserCredentials'

export const useAuthenticationStore = defineStore('authentication', () => {
  const user = ref<User | undefined>(undefined)
  const isAuthenticated = computed(() => user.value !== undefined)
  const login = async (credentials: UserCredentials) => {
    user.value = await api.login(credentials)
  }

  const logout = async () => {
    await api.logout()
    user.value = undefined
  }

  return { user, isAuthenticated, login, logout }
})
