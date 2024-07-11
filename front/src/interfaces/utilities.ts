export type New<T> = Omit<T, 'id'>

export interface ObjectWithId {
  id: string
}
