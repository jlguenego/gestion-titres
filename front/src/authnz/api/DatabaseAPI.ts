import { DATABASE_PREFIX } from './ResourceAPI'

export class DatabaseAPI {
  async reset() {
    localStorage.clear()
  }

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
}

export const databaseApi = new DatabaseAPI()
