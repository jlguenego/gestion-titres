import type { Menu, MenuDirectory, MenuItem } from '@/interfaces/Menu'
import { menuDefault } from '@/menus/menuDefault'

export const menuFlat = (menu: Menu): MenuItem[] => {
  if (menu.type === 'item') {
    return [menu]
  }

  return menu.content.map((m) => menuFlat(m)).flat(1)
}

export const getFavorites = (menu: Menu) => {
  return menuFlat(menu)
    .flat(1)
    .filter((m) => m.type === 'item')
    .filter((m) => m.favorite !== undefined)
    .sort((m1, m2) => {
      if (m1.favorite === undefined || m2.favorite === undefined) {
        return 0
      }
      return Math.sign(m1.favorite - m2.favorite)
    })
}

export const getAllMenuItems = (menu: MenuDirectory): MenuItem[] => {
  const menuItems = menuFlat(menu)
    .flat(1)
    .filter((m) => m.type === 'item')
  return menuItems
}

export const getMenuItem = (name: string): MenuItem => {
  const menuItems = menuFlat(menuDefault)
    .flat(1)
    .filter((m) => m.type === 'item')
  console.log('menuItems: ', menuItems)

  const menuItem = menuItems.find((m) => m.name === name)
  if (menuItem === undefined) {
    throw new Error(`Menu item not found: ${name}`)
  }
  return menuItem
}
