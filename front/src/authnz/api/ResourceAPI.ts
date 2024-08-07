import type { New, ObjectWithId } from '@/interfaces/utilities'
import { ErrorMessage } from '../interfaces/ErrorMessage'
import { generateId } from '../misc/generateId'

export const DATABASE_PREFIX = 'backEnd.'

const getKey = (resourceName: string) => {
  return `${DATABASE_PREFIX}${resourceName}`
}

export class ResourceAPI<T extends ObjectWithId> {
  constructor(private resourceName: string) {}

  async add(newResource: New<T>): Promise<string> {
    const resources = await this.retrieveAll()
    const key = getKey(this.resourceName)
    const id = generateId()
    const resource: T = { id, ...newResource } as T
    resources.push(resource)
    localStorage.setItem(key, JSON.stringify(resources))
    return id
  }

  async retrieveAll(): Promise<T[]> {
    const key = getKey(this.resourceName)
    const str = localStorage.getItem(key)
    if (str === null) {
      return []
    }
    const resources = JSON.parse(str)
    return resources
  }

  async remove(ids: string[]) {
    const resources = await this.retrieveAll()
    const key = getKey(this.resourceName)
    const filteredResources = resources.filter((r) => !ids.includes(r.id))
    localStorage.setItem(key, JSON.stringify(filteredResources))
  }

  async replace(resource: T) {
    const resources = await this.retrieveAll()
    const key = getKey(this.resourceName)
    const index = resources.findIndex((r) => r.id === resource.id)
    if (index === -1) {
      throw new Error(ErrorMessage.RESSOURCE_NOT_FOUND)
    }
    resources.splice(index, 1, resource)
    localStorage.setItem(key, JSON.stringify(resources))
  }
}
