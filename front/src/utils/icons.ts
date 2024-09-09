import { getAllMenuItems } from '@/modules/help/utils/favorites'
import { defaultMenuDir } from '@/menus/menuDefault'
import type { Component } from 'vue'

export const iconMap = new Map<string, Component | undefined>()

const menuItems = getAllMenuItems(defaultMenuDir)
for (const menuItem of menuItems) {
  iconMap.set(menuItem.name, menuItem.icon)
}
