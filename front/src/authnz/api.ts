import type { New, ObjectWithId } from '@/interfaces/utilities'
import { ErrorMessage } from './interfaces/ErrorMessage'
import type { User } from './interfaces/User'
import type { UserCredentials } from './interfaces/UserCredentials'

const getKey = (resourceName: string) => {
  return `backEnd.${resourceName}`
}

class API {
  add<T extends ObjectWithId>(resourceName: string) {
    return async (newResource: New<T>) => {
      const resources = await this.retrieveAll<T>(resourceName)()
      const key = getKey(resourceName)
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
      const key = getKey(resourceName)
      const filteredResources = resources.filter((r) => ids.includes(r.id))
      localStorage.setItem(key, JSON.stringify(filteredResources))
    }
  }

  replace<T extends ObjectWithId>(resourceName: string) {
    return async (resource: T) => {
      const resources = await this.retrieveAll<T>(resourceName)()
      const key = getKey(resourceName)
      const index = resources.findIndex((r) => r.id === resource.id)
      if (index === -1) {
        throw new Error(ErrorMessage.RESSOURCE_NOT_FOUND)
      }
      resources.splice(index, 1, resource)
      localStorage.setItem(key, JSON.stringify(resources))
    }
  }

  retrieveAll<T extends ObjectWithId>(resourceName: string) {
    return async (): Promise<T[]> => {
      console.log('retrieveAll')
      const key = getKey(resourceName)
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
