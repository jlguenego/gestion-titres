import { getAllMenuItems } from '@/modules/help/utils/favorites'
import { menuDefaults } from '@/menus/menus'
import type { Component } from 'vue'

export const iconMap = new Map<string, Component | undefined>()

const menuItems = getAllMenuItems(menuDefaults)
for (const menuItem of menuItems) {
  iconMap.set(menuItem.name, menuItem.icon)
}
