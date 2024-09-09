import type { Group } from '../interfaces/Group'
import type { User } from '../interfaces/User'
import { useGroupStore } from '../stores/GroupStore'
import { usePrivilegeStore } from '../stores/PrivilegeStore'

export const getPermissionIds = async (user: User): Promise<Set<string>> => {
  console.log('user: ', user)
  // look at the group of a user
  const groups = await getGroups(user)
  const permissions = new Set<string>()
  const privileges = await usePrivilegeStore().needPrivileges()
  for (const group of groups) {
    for (const privilegeId of group.privilegeIds) {
      const privilege = privileges.find((p) => p.id === privilegeId)
      if (privilege === undefined) {
        throw new Error(`privilege not found with id: ${privilegeId}`)
      }
      for (const f of [...privilege.readOnlyPermissions, ...privilege.mutationPermissions]) {
        permissions.add(f.id)
      }
    }
  }
  return permissions
}

export const getGroups = async (user: User): Promise<Group[]> => {
  const groups = await useGroupStore().needGroups()
  const filteredGroups = groups.filter((g) => g.userIds.includes(user.id))
  return filteredGroups
}
