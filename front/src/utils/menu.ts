import type { Menu } from '@/authnz/interfaces/Menu'

export const collapse = (menu: Menu) => {
  if (menu.type === 'item') {
    return
  }
  menu.isExpanded = false
  for (const item of menu.content) {
    collapse(item)
  }
}
