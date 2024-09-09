import type { New, ObjectWithId } from '@/interfaces/utilities'
import { ErrorMessage } from '../interfaces/ErrorMessage'
import { generateId } from '../misc/generateId'
import localforage from 'localforage'
import { clone } from '@/utils/misc'

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
    await localforage.setItem(key, clone(resources))
    return id
  }

  async patch(id: string, partialResource: Partial<T>): Promise<T> {
    console.log('patching resource with id', id)
    const resources = await this.retrieveAll()
    const key = getKey(this.resourceName)
    const resource = resources.find((r) => r.id === id)
    if (resource === undefined) {
      throw new Error(ErrorMessage.RESSOURCE_NOT_FOUND)
    }
    Object.assign(resource, partialResource)
    await localforage.setItem(key, clone(resources))
    return resource
  }

  async remove(ids: string[]) {
    const resources = await this.retrieveAll()
    const key = getKey(this.resourceName)
    const filteredResources = resources.filter((r) => !ids.includes(r.id))
    await localforage.setItem(key, clone(filteredResources))
  }

  async replace(resource: T) {
    const resources = await this.retrieveAll()
    const key = getKey(this.resourceName)
    const index = resources.findIndex((r) => r.id === resource.id)
    if (index === -1) {
      throw new Error(ErrorMessage.RESSOURCE_NOT_FOUND)
    }
    resources.splice(index, 1, resource)
    await localforage.setItem(key, clone(resources))
  }

  async retrieveAll(): Promise<T[]> {
    const key = getKey(this.resourceName)
    const obj: object | null = await localforage.getItem(key)
    if (obj === null) {
      return []
    }
    const resources = obj as T[]
    return resources
  }
}
