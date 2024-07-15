import { useMenuStore } from '@/layout/stores/MenuStore'
import { useResponsiveStore } from '@/stores/ResponsiveStore'
import type { NavigationHookAfter } from 'vue-router'

export const responsiveGuard: NavigationHookAfter = (to) => {
  const responsiveStore = useResponsiveStore()
  const menuStore = useMenuStore()
  if (responsiveStore.isMobile) {
    menuStore.hideMenu()
  }
}
