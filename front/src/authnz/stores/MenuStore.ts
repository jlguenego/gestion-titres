import { defineStore } from 'pinia'
import { ref } from 'vue'
import { menuDefaults } from '../../menus/menus'
import type { Menu, MenuDirectory } from '../interfaces/Menu'

export const useMenuStore = defineStore('menuStore', () => {
  const menus = ref<Menu[]>(menuDefaults)

  const collapse = (menuDir: MenuDirectory) => {
    menuDir.isExpanded = false
  }

  const collapseDeep = (menuDir: MenuDirectory) => {
    collapse(menuDir)
    for (const item of menuDir.content) {
      if (item.type === 'item') {
        continue
      }
      collapseDeep(item)
    }
  }

  const collapseAll = () => {
    for (const item of menus.value) {
      if (item.type === 'item') {
        continue
      }
      collapseDeep(item)
    }
  }
  return { menus, collapse, collapseAll, collapseDeep }
})
