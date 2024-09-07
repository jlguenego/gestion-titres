import { scrollToMenu } from '@/utils/element'
import { retryUntil } from '@/utils/misc'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { NavigationHookAfter } from 'vue-router'
import { menuDefaults } from '../../menus/menus'
import type { Menu, MenuDirectory } from '../interfaces/Menu'
import { getFavorites } from '@/favorites/utils/favorites'

export const useMenuStore = defineStore('menuStore', () => {
  const menus = ref<Menu[]>(menuDefaults)

  const favorites = computed(() => getFavorites(menus.value))

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

  const expandAll = () => {
    console.log('expandAll')
    for (const item of menus.value) {
      if (item.type === 'item') {
        continue
      }
      item.isExpanded = true
      expandAllFrom(item)
    }
  }

  const expandAllFrom = (menuDir: MenuDirectory) => {
    console.log('expandFrom')
    for (const item of menuDir.content) {
      if (item.type === 'item') {
        continue
      }
      item.isExpanded = true
      expandAllFrom(item)
    }
  }

  const expand = (routeName: string): boolean => {
    console.log('expanding to ', routeName)
    for (const item of menus.value) {
      if (item.type === 'item') {
        if (item.name === routeName) {
          return true
        }
      }
      if (item.type === 'directory') {
        if (expandFrom(item, routeName)) {
          return true
        }
      }
    }
    return false
  }

  const expandFrom = (menuDir: MenuDirectory, routeName: string) => {
    for (const item of menuDir.content) {
      if (item.type === 'item') {
        if (item.name === routeName) {
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
  return { menus, favorites, collapse, collapseAll, collapseDeep, expand, expandAll }
})

export const menuGuard: NavigationHookAfter = (to) => {
  const menuStore = useMenuStore()
  if (menuStore.expand(to.fullPath.substring(1))) {
    retryUntil(() => {
      scrollToMenu(to)
    }, 2000)
  }

  return true
}
