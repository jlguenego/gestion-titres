import type { Menu, MenuItem } from '@/authnz/interfaces/Menu'

const menuFlat = (menu: Menu): Menu[] => {
  if (menu.type === 'item') {
    return [menu]
  }

  return menu.content.map((m) => menuFlat(m)).flat(1)
}

export const getFavorites = (menus: Menu[]) => {
  return menus
    .map((m) => menuFlat(m))
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

export const getMenuItem = (menus: Menu[], name: string): MenuItem => {
  const menuItems = menus
    .map((m) => menuFlat(m))
    .flat(1)
    .filter((m) => m.type === 'item')

  const menuItem = menuItems.find((m) => m.name === name)
  if (menuItem === undefined) {
    throw new Error('Menu item not found')
  }
  return menuItem
}
