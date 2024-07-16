import type { New } from '@/interfaces/utilities'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ResourceAPI } from '../api/ResourceAPI'
import type { Role } from '../interfaces/Role'

const api = new ResourceAPI<Role>('role')

export const useRoleStore = defineStore('role', () => {
  const roles = ref<Role[] | undefined>()

  const refresh = async () => {
    roles.value = await api.retrieveAll()
  }

  const add = async (newRole: New<Role>) => {
    await api.add(newRole)
    roles.value = await api.retrieveAll()
  }

  const remove = async (ids: string[]) => {
    await api.remove(ids)
    roles.value = await api.retrieveAll()
  }

  const replace = async (role: Role) => {
    await api.replace(role)
    roles.value = await api.retrieveAll()
  }

  return { roles, refresh, add, remove, replace }
})
