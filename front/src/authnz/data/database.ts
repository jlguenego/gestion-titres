import type { Privilege } from '../interfaces/Privilege'
import type { User } from '../interfaces/User'
import { ResourceAPI } from '../ResourceAPI'
import { adminPrivilege, firstUser } from './FirstUser'

export const userApi = new ResourceAPI<User>('user')
export const privilegeApi = new ResourceAPI<Privilege>('privilege')

class Database {
  async init() {
    const users = await userApi.retrieveAll()
    if (users.length > 0) {
      return
    }
    await privilegeApi.add(adminPrivilege)
    await userApi.add(firstUser)
  }
}

export const database = new Database()
