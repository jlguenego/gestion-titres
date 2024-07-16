export class DatabaseAPI {
  reset() {
    localStorage.clear()
  }
}

export const databaseApi = new DatabaseAPI()
