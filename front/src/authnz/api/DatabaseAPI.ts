import localforage from 'localforage'
import { DATABASE_PREFIX } from './ResourceAPI'

export class DatabaseAPI {
  async export(): Promise<object> {
    const keys = Object.fromEntries(
      Object.entries(localStorage)
        .filter(([key]) => {
          return key.startsWith(DATABASE_PREFIX)
        })
        .map(([key, value]) => {
          return [key, JSON.parse(value)]
        }),
    )
    console.log('keys: ', keys)
    return keys
  }

  async import(obj: object): Promise<void> {
    console.log('obj: ', obj)
    for (const [key, value] of Object.entries(obj)) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  async reset() {
    localStorage.clear()
    await localforage.clear()
  }
}

export const databaseApi = new DatabaseAPI()
