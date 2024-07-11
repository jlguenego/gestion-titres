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
    // go to the pseudo backend and check
    const users = await this.retrieveAll<User>('user')()
    const user = users.find(
      (u) => u.username === credentials.username && u.password === credentials.password,
    )
    if (user === undefined) {
      throw new Error(ErrorMessage.BAD_LOGIN)
    }
    return user
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
      console.log('retrieveAll')
      const key = `backEnd.${resourceName}`
      const str = localStorage.getItem(key)
      console.log('str: ', str)
      if (str === null) {
        return []
      }
      const resources = JSON.parse(str)
      return resources
    }
  }
}

export const api = new API()
