export interface Role {
  id: string
  /**
   * Name of the Role
   */
  name: string
  privileges: string[]
  description: string
}
