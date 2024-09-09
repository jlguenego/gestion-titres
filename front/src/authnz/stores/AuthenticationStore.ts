import { loadingStore } from '@/utils/loadingStore'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api } from '../api/api'
import type { User } from '../interfaces/User'
import type { UserCredentials } from '../interfaces/UserCredentials'
import { useMenuStore } from './MenuStore'

export const useAuthenticationStore = defineStore('authentication', () => {
  const { waitUntilReady } = loadingStore('authentication')
  const user = ref<User | undefined>(undefined)
  const isAuthenticated = computed(() => user.value !== undefined)

  const login = async (credentials: UserCredentials) => {
    user.value = await api.login(credentials)
    const menuStore = useMenuStore()
    menuStore.refresh()
  }

  const logout = async () => {
    await api.logout()
    user.value = undefined
  }

  const needUser = (): User => {
    if (user.value === undefined) {
      throw new Error('Need authentication')
    }
    return user.value
  }

  const patch = async (partialUser: Partial<User>) => {
    console.log('authenticationStore patch: ', partialUser)
    if (user.value === undefined) {
      throw new Error('Need to be identified')
    }
    const id = user.value.id
    user.value = await api.patch(id, partialUser)
  }

  return { user, isAuthenticated, login, logout, needUser, patch, waitUntilReady }
})
