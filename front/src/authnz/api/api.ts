import { fakeBackendFetch } from '@/fakebackend/fetch'
import { ErrorMessage } from '../interfaces/ErrorMessage'
import type { User } from '../interfaces/User'
import type { UserCredentials } from '../interfaces/UserCredentials'
import { ResourceAPI } from './ResourceAPI'

const fetch: typeof window.fetch = FAKE_BACKEND ? fakeBackendFetch : window.fetch

const resourceAPI = new ResourceAPI<User>('user')

const loginUrl = '/auth/login'

class API {
  async login(credentials: UserCredentials): Promise<User> {
    // go to the pseudo backend and check
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        body: JSON.stringify(credentials),
      })
      const user = await response.json()
      if (user === undefined) {
        throw new Error(ErrorMessage.BAD_LOGIN)
      }
      return user
    } catch (err) {
      throw new Error(ErrorMessage.UNEXPECTED)
    }
  }

  async logout() {}

  async patch(id: string, partialUser: Partial<User>): Promise<User> {
    const user = await resourceAPI.patch(id, partialUser)
    return user
  }
}

export const api = new API()
