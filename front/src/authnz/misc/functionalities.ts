import type { Functionality } from '../interfaces/Functionality'

export const readOnlyFunctionalities: Functionality[] = [
  { id: 'users:read', name: 'Utilisateurs' },
  { id: 'current-user:read', name: 'Mon Compte' },
]

export const mutationFunctionalities: Functionality[] = [
  { id: 'database:reset', name: 'Database Reset' },
  { id: 'users:write', name: 'Utilisateurs' },
  { id: 'current-user:write', name: 'Mon Compte' },
]
