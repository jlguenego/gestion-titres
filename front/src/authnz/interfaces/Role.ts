export interface Role {
  id: string
  /**
   * Name of the Role
   */
  name: string
  privilegeIds: string[]
  description: string
}
