import type { New } from '@/interfaces/utilities'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from './api'
import type { User } from './interfaces/User'

export const useUserStore = defineStore('user', () => {
  const users = ref<User[] | undefined>()
  const refresh = async () => {
    users.value = await api.retrieveAll<User>('user')()
  }

  const add = async (newUser: New<User>) => {
    await api.add<User>('user')(newUser)
    await refresh()
  }

  const remove = async (ids: string[]) => {
    await api.remove<User>('user')(ids)
    await refresh()
  }

  return { users, refresh, add, remove }
})
