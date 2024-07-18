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
    const id = await privilegeApi.add(adminPrivilege)

    adminRole.privilegeIds = [id]
    await roleApi.add(adminRole)

    await userApi.add(firstUser)
  }

  async reset() {
    await databaseApi.reset()
  }
}

export const database = new Database()
