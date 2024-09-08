import { ErrorMessage } from '../interfaces/ErrorMessage'
import type { User } from '../interfaces/User'
import type { UserCredentials } from '../interfaces/UserCredentials'
import { ResourceAPI } from './ResourceAPI'

const resourceAPI = new ResourceAPI<User>('user')

class API {
  async login(credentials: UserCredentials): Promise<User> {
    // go to the pseudo backend and check
    const users = await resourceAPI.retrieveAll()
    const user = users.find(
      (u) => u.name === credentials.username && u.password === credentials.password,
    )
    if (user === undefined) {
      throw new Error(ErrorMessage.BAD_LOGIN)
    }
    return user
  }

  async logout() {}

  async patch(id: string, partialUser: Partial<User>): Promise<User> {
    const user = await resourceAPI.patch(id, partialUser)
    return user
  }
}

export const api = new API()
