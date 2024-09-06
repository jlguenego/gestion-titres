import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { NavigationHookAfter } from 'vue-router'
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

  const expand = (routeName: string) => {
    for (const item of menus.value) {
      if (item.type === 'item') {
        if (item.name === routeName) {
          console.log('trouveeeeee expand')
          return
        }
      }
      if (item.type === 'directory') {
        expandFrom(item, routeName)
      }
    }
  }

  const expandFrom = (menuDir: MenuDirectory, routeName: string) => {
    for (const item of menuDir.content) {
      if (item.type === 'item') {
        if (item.name === routeName) {
          console.log('trouveeeeee expandFrom')
          menuDir.isExpanded = true
          return true
        }
      }
      if (item.type === 'directory') {
        const found = expandFrom(item, routeName)
        if (found) {
          menuDir.isExpanded = true
          return true
        }
      }
    }
    return false
  }
  return { menus, collapse, collapseAll, collapseDeep, expand }
})

export const menuGuard: NavigationHookAfter = (to) => {
  const menuStore = useMenuStore()
  menuStore.expand(to.fullPath.substring(1))

  return true
}
