import { databaseApi } from '../api/DatabaseAPI'
import { ResourceAPI } from '../api/ResourceAPI'
import type { Privilege } from '../interfaces/Privilege'
import type { Role } from '../interfaces/Role'
import type { User } from '../interfaces/User'
import { adminPrivilege, adminRole, firstUser } from './FirstUser'

export const userApi = new ResourceAPI<User>('user')
export const privilegeApi = new ResourceAPI<Privilege>('privilege')
export const roleApi = new ResourceAPI<Role>('role')

class Database {
  async init() {
    const users = await userApi.retrieveAll()
    if (users.length > 0) {
      return
    }
    await privilegeApi.add(adminPrivilege)
    await userApi.add(firstUser)
    await roleApi.add(adminRole)
  }

  async reset() {
    await databaseApi.reset()
  }
}

export const database = new Database()
