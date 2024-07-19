export interface Group {
  id: string
  /**
   * Name of the Group
   */
  name: string
  description: string
  privilegeIds: string[]
  userIds: string[]
}
