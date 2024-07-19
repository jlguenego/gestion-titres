import { databaseApi } from '../api/DatabaseAPI'
import { ResourceAPI } from '../api/ResourceAPI'
import type { Privilege } from '../interfaces/Privilege'
import type { Group } from '../interfaces/Group'
import type { User } from '../interfaces/User'
import { adminPrivilege, adminGroup, firstUser } from './FirstUser'

export const userApi = new ResourceAPI<User>('user')
export const privilegeApi = new ResourceAPI<Privilege>('privilege')
export const groupApi = new ResourceAPI<Group>('group')

class Database {
  async init() {
    const users = await userApi.retrieveAll()
    if (users.length > 0) {
      return
    }
    const id = await privilegeApi.add(adminPrivilege)

    adminGroup.privilegeIds = [id]
    await groupApi.add(adminGroup)

    await userApi.add(firstUser)
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
