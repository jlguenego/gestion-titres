import localforage from 'localforage'
import { DATABASE_PREFIX } from './ResourceAPI'
import { clone } from '@/utils/misc'

export class DatabaseAPI {
  async export(): Promise<object> {
    console.log('localforage: ', localforage)
    const localforageKeys = (await localforage.keys()).filter((key) => {
      return key.startsWith(DATABASE_PREFIX)
    })
    const obj: { [key: string]: object | null } = {}
    for (const key of localforageKeys) {
      obj[key] = await localforage.getItem(key)
    }
    return obj
  }

  async import(obj: object): Promise<void> {
    console.log('obj: ', obj)
    for (const [key, value] of Object.entries(obj)) {
      await localforage.setItem(key, clone(value))
    }
  }

  async reset() {
    localStorage.clear()
    await localforage.clear()
  }
}

export const databaseApi = new DatabaseAPI()
