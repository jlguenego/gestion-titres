import type { Functionality } from './Functionality'

export interface Privilege {
  id: string
  name: string
  description: string
  readOnlyFunctionalities: Functionality[]
  mutationFunctionalities: Functionality[]
}
