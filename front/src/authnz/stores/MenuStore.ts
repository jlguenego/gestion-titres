import { getFavorites } from '@/modules/help/utils/favorites'
import { scrollToMenu } from '@/utils/element'
import { collapse, expandAllFrom, expandFrom } from '@/utils/menu'
import { retryUntil } from '@/utils/misc'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { NavigationHookAfter } from 'vue-router'
import { menuDefault } from '../../menus/menus'

export const useMenuStore = defineStore('menuStore', () => {
  const menu = ref(menuDefault)

  const favorites = computed(() => getFavorites(menu.value))

  const collapseAll = () => {
    collapse(menu.value)
  }

  const expandAll = () => {
    expandAllFrom(menu.value)
  }

  const expand = (routeName: string): boolean => {
    for (const item of menu.value.content) {
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

  return { menu, favorites, collapseAll, expand, expandAll }
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
