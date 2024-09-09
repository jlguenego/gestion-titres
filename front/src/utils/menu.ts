import type { Menu, MenuDirectory } from '@/interfaces/Menu'

export const collapse = (menu: Menu) => {
  if (menu.type === 'item') {
    return
  }
  menu.isExpanded = false
  for (const item of menu.content) {
    collapse(item)
  }
}

export const expandAllFrom = (menuDir: MenuDirectory) => {
  for (const item of menuDir.content) {
    if (item.type === 'item') {
      continue
    }
    item.isExpanded = true
    expandAllFrom(item)
  }
}

export const expandFrom = (menuDir: MenuDirectory, routeName: string) => {
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
