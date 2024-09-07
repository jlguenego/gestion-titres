import type { MenuItem } from '@/authnz/interfaces/Menu'
import { useMenuStore } from '@/authnz/stores/MenuStore'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getMenuItem } from '../utils/favorites'

export const useFavoriteStore = defineStore('favoriteStore', () => {
  const menuStore = useMenuStore()
  const defaultFavorites = ['database', 'welcome', 'saisie_operation'].map((name) =>
    getMenuItem(menuStore.menus, name),
  )
  const favorites = ref<MenuItem[]>(defaultFavorites)

  return { favorites }
})
