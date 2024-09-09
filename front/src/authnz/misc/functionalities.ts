import type { Functionality } from '../interfaces/Functionality'

export const readOnlyFunctionalities: Functionality[] = [
  { id: 'users:read', name: 'Utilisateurs' },
  { id: 'current-user:read', name: 'Mon Compte' },
]

export const mutationFunctionalities: Functionality[] = [
  // for admins
  { id: 'menu:parametrage', name: 'Menu Parametrage' },
  { id: 'menu:maintenance', name: 'Menu Maintenance' },
  { id: 'database:reset', name: 'Database Reset' },
  // for users
  { id: 'users:write', name: 'Utilisateurs' },
  { id: 'current-user:write', name: 'Mon Compte' },
]
