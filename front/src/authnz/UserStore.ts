import type { New } from '@/interfaces/utilities'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from './api'
import type { User } from './interfaces/User'

export const useUserStore = defineStore('user', () => {
  const users = ref<User[] | undefined>()

  const refresh = async () => {
    console.log('refresh users')
    users.value = await api.retrieveAll<User>('user')()
    console.log('users.value: ', users.value)
    if (users.value && users.value.length === 0) {
      await api.add<User>('user')({
        username: 'admin',
        password: 'truc1234!',
        displayName: 'Jean-Louis GUENEGO',
      })
      users.value = await api.retrieveAll<User>('user')()
    }
  }

  const add = async (newUser: New<User>) => {
    await api.add<User>('user')(newUser)
    users.value = await api.retrieveAll<User>('user')()
  }

  const remove = async (ids: string[]) => {
    await api.remove<User>('user')(ids)
    users.value = await api.retrieveAll<User>('user')()
  }

  return { users, refresh, add, remove }
})
