import { defineStore } from 'pinia'
import { ref } from 'vue'
import { menuDefaults } from '../../menus/menus'
import type { Menu } from '../interfaces/Menu'

export const useMenuStore = defineStore('menuStore', () => {
  const menus = ref<Menu[]>(menuDefaults)
  return { menus }
})
