import { useMenuPageStore } from '@/layout/stores/MenuPageStore'
import { useResponsiveStore } from '@/stores/ResponsiveStore'
import type { NavigationHookAfter } from 'vue-router'

export const responsiveGuard: NavigationHookAfter = () => {
  const responsiveStore = useResponsiveStore()
  const menuPageStore = useMenuPageStore()
  if (responsiveStore.isMobile) {
    menuPageStore.hideMenu()
  }
}
