export type New<T> = Omit<T, 'id'>

export interface ObjectWithId {
  id: string
}

export interface Item {
  id: string
  name: string
}
