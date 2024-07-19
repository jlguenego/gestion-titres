import type { New } from '@/interfaces/utilities'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ResourceAPI } from '../api/ResourceAPI'
import type { Group } from '../interfaces/Group'

const api = new ResourceAPI<Group>('group')

export const useGroupStore = defineStore('group', () => {
  const groups = ref<Group[] | undefined>()

  const refresh = async () => {
    groups.value = await api.retrieveAll()
  }

  const add = async (newGroup: New<Group>) => {
    await api.add(newGroup)
    groups.value = await api.retrieveAll()
  }

  const remove = async (ids: string[]) => {
    await api.remove(ids)
    groups.value = await api.retrieveAll()
  }

  const replace = async (group: Group) => {
    await api.replace(group)
    groups.value = await api.retrieveAll()
  }

  return { groups, refresh, add, remove, replace }
})
