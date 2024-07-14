import type { New } from '@/interfaces/utilities'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Privilege } from '../interfaces/Privilege'
import { ResourceAPI } from '../ResourceAPI'

const api = new ResourceAPI<Privilege>('privilege')

export const usePrivilegeStore = defineStore('privilege', () => {
  const privileges = ref<Privilege[] | undefined>()

  const refresh = async () => {
    privileges.value = await api.retrieveAll()
  }

  const add = async (newPrivilege: New<Privilege>) => {
    await api.add(newPrivilege)
    privileges.value = await api.retrieveAll()
  }

  const remove = async (ids: string[]) => {
    await api.remove(ids)
    privileges.value = await api.retrieveAll()
  }

  const replace = async (privilege: Privilege) => {
    await api.replace(privilege)
    privileges.value = await api.retrieveAll()
  }

  return { privileges, refresh, add, remove, replace }
})
