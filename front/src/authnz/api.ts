import { ErrorMessage } from './interfaces/ErrorMessage'
import type { User } from './interfaces/User'
import type { UserCredentials } from './interfaces/UserCredentials'

class API {
  async login(credentials: UserCredentials): Promise<User> {
    if (credentials.username === 'admin' && credentials.password === 'titi1234!') {
      return {
        username: credentials.username,
        displayName: 'Jean-Louis GUENEGO',
      }
    }
    throw new Error(ErrorMessage.BAD_LOGIN)
  }

  async logout() {}
}

export const api = new API()
