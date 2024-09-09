import type { New } from '@/interfaces/utilities'
import { Gender, type User } from '../interfaces/User'
import type { Privilege } from '../interfaces/Privilege'
import type { Group } from '../interfaces/Group'
import { mutationPermissions, readOnlyPermissions } from '../misc/permissions'

export const firstUser: New<User> = {
  name: 'admin',
  password: 'truc1234!',
  displayName: 'Jean-Louis GUENEGO',
  jobTitle: 'Administrateur',
  email: 'jlguenego@gmail.com',
  phone: '+33612341234',
  gender: Gender.MALE,
  favorites: ['database', 'documentation/introduction'],
}

export const adminPrivilege: New<Privilege> = {
  name: 'adminPrivilege',
  readOnlyPermissions: [...readOnlyPermissions],
  mutationPermissions: [...mutationPermissions],
  description: "Un administrateur a accès à toutes les fonctionnalités de l'application",
}

export const userPrivilege: New<Privilege> = {
  name: 'userPrivilege',
  readOnlyPermissions: [...readOnlyPermissions],
  mutationPermissions: [...mutationPermissions.slice(3)],
  description:
    "Ce privilège permet à un utilisateur de tout voir et mettre à jour sauf les activités d'administration",
}

export const readOnlyPrivilege: New<Privilege> = {
  name: 'readOnlyPrivilege',
  readOnlyPermissions: [...readOnlyPermissions],
  mutationPermissions: [],
  description: 'Ce privilège permet à un utilisateur de tout voir mais rien mettre à jour',
}

export const adminGroup: New<Group> = {
  name: 'admin',

  description:
    "Le groupe administrateur possède juste le privilège administrateur qui permet d'accéder à toutes les fonctionnalités de l'application.",
  privilegeIds: [],
  userIds: [],
}

export const readonlyGroup: New<Group> = {
  name: 'readonly',

  description: 'Groupe des utilisateurs qui peuvent juste lire.',
  privilegeIds: [],
  userIds: [],
}

export const userGroup: New<Group> = {
  name: 'user',

  description: 'Groupe des utilisateurs qui peuvent lire et écrire.',
  privilegeIds: [],
  userIds: [],
}
