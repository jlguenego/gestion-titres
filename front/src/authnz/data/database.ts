import { databaseApi } from '../api/DatabaseAPI'
import { ResourceAPI } from '../api/ResourceAPI'
import type { Privilege } from '../interfaces/Privilege'
import type { Group } from '../interfaces/Group'
import type { User } from '../interfaces/User'
import {
  adminPrivilege,
  adminGroup,
  firstUser,
  userPrivilege,
  readOnlyPrivilege,
  userGroup,
  readonlyGroup,
} from './FirstUser'

export const userApi = new ResourceAPI<User>('user')
export const privilegeApi = new ResourceAPI<Privilege>('privilege')
export const groupApi = new ResourceAPI<Group>('group')

class Database {
  async init() {
    const users = await userApi.retrieveAll()
    if (users.length > 0) {
      return
    }
    const privilegeId = await privilegeApi.add(adminPrivilege)
    adminGroup.privilegeIds = [privilegeId]

    const userId = await userApi.add(firstUser)
    adminGroup.userIds = [userId]

    await groupApi.add(adminGroup)

    const userPrivilegeId = await privilegeApi.add(userPrivilege)
    userGroup.privilegeIds = [userPrivilegeId]
    const readOnlyPrivilegeId = await privilegeApi.add(readOnlyPrivilege)
    readonlyGroup.privilegeIds = [readOnlyPrivilegeId]

    await groupApi.add(userGroup)
    await groupApi.add(readonlyGroup)
  }

  async reset() {
    await databaseApi.reset()
  }

  async export(): Promise<object> {
    return await databaseApi.export()
  }

  async import(obj: object): Promise<void> {
    await databaseApi.import(obj)
  }
}

export const database = new Database()
