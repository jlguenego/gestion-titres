import type { Functionality } from './Functionality'

export interface Privilege {
  id: string
  name: string
  functionalities: Functionality[]
}