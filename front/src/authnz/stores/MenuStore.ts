import type { MenuDirectory } from '@/interfaces/Menu'
import { getFavorites } from '@/modules/help/utils/favorites'
import { scrollToMenu } from '@/utils/element'
import {
  filterWithPermission,
  collapseAllFrom,
  expandAllFrom,
  expandFrom,
} from '@/utils/menu.utils'
import { retryUntil } from '@/utils/misc'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { NavigationHookAfter } from 'vue-router'
import { emptyMenuDir, defaultMenuDir } from '../../menus/menuDefault'

export const useMenuStore = defineStore('menuStore', () => {
  const menu = ref<MenuDirectory>(emptyMenuDir)

  const refresh = async () => {
    try {
      menu.value = await filterWithPermission(defaultMenuDir)
    } catch (err) {
      //
    }
  }

  refresh()

  const favorites = computed(() => getFavorites(menu.value))

  const collapseAll = () => {
    collapseAllFrom(menu.value)
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

  return { menu, favorites, collapseAll, expand, expandAll, refresh }
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
