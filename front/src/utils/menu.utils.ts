import { getPermissionIds } from '@/authnz/misc/user'
import { useAuthenticationStore } from '@/authnz/stores/AuthenticationStore'
import type { Menu, MenuDirectory } from '@/interfaces/Menu'

export const collapseAllFrom = (menu: Menu) => {
  if (menu.type === 'item') {
    return
  }
  menu.isExpanded = false
  for (const item of menu.content) {
    collapseAllFrom(item)
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

export const authzFiltered = async (menu: MenuDirectory): Promise<MenuDirectory> => {
  const authenticationStore = useAuthenticationStore()
  const user = authenticationStore.needUser()
  const permissions = await getPermissionIds(user)

  const filteredMenu = filterStructure(menu, permissions)
  return filteredMenu
}

const filterStructure = (menu: MenuDirectory, permissions: Set<string>): MenuDirectory => {
  const result: MenuDirectory = { ...menu }
  result.content = []
  for (const item of menu.content) {
    if (item.authz !== undefined && !permissions.has(item.authz)) {
      continue
    }
    if (item.type === 'item') {
      result.content.push(item)
      continue
    }
    result.content.push(filterStructure(item, permissions))
  }
  return result
}
