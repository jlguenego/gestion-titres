import type { Permission } from './Functionality'

export interface Privilege {
  id: string
  name: string
  description: string
  readOnlyPermissions: Permission[]
  mutationPermissions: Permission[]
}
