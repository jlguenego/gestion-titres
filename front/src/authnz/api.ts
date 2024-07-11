import type { New, ObjectWithId } from '@/interfaces/utilities'
import { ErrorMessage } from './interfaces/ErrorMessage'
import type { User } from './interfaces/User'
import type { UserCredentials } from './interfaces/UserCredentials'

class API {
  add<T extends ObjectWithId>(resourceName: string) {
    return async (newResource: New<T>) => {
      const resources = await this.retrieveAll<T>(resourceName)()
      const key = `backEnd.${resourceName}`
      const resource: T = { ...newResource, id: window.crypto.randomUUID() } as T
      resources.push(resource)
      localStorage.setItem(key, JSON.stringify(resources))
    }
  }

  async login(credentials: UserCredentials): Promise<User> {
    if (credentials.username === 'admin' && credentials.password === 'titi1234!') {
      return {
        id: 'useradmin',
        username: credentials.username,
        displayName: 'Jean-Louis GUENEGO',
      }
    }
    throw new Error(ErrorMessage.BAD_LOGIN)
  }

  async logout() {}

  remove<T extends ObjectWithId>(resourceName: string) {
    return async (ids: string[]) => {
      const resources = await this.retrieveAll<T>(resourceName)()
      const key = `backEnd.${resourceName}`
      const filteredResources = resources.filter((r) => ids.includes(r.id))
      localStorage.setItem(key, JSON.stringify(filteredResources))
    }
  }

  retrieveAll<T extends ObjectWithId>(resourceName: string) {
    return async (): Promise<T[]> => {
      const key = `backEnd.${resourceName}`
      const str = localStorage.getItem(key)
      if (str === null) {
        return []
      }
      const resources = JSON.parse(str)
      return resources[resourceName]
    }
  }
}

export const api = new API()
