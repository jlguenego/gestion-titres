import type { New } from '@/interfaces/utilities'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../interfaces/User'
import { ResourceAPI } from '../api/ResourceAPI'

const api = new ResourceAPI<User>('user')

export const useUserStore = defineStore('user', () => {
  const users = ref<User[] | undefined>()

  const refresh = async () => {
    users.value = await api.retrieveAll()
  }

  const add = async (newUser: New<User>) => {
    await api.add(newUser)
    users.value = await api.retrieveAll()
  }

  const remove = async (ids: string[]) => {
    await api.remove(ids)
    users.value = await api.retrieveAll()
  }

  const replace = async (user: User) => {
    await api.replace(user)
    users.value = await api.retrieveAll()
  }

  return { users, refresh, add, remove, replace }
})
