import type { New } from '@/interfaces/utilities'
import { Gender, type User } from '../interfaces/User'
import type { Privilege } from '../interfaces/Privilege'
import type { Group } from '../interfaces/Group'
import { mutationFunctionalities, readOnlyFunctionalities } from '../misc/functionalities'

export const firstUser: New<User> = {
  username: 'admin',
  password: 'truc1234!',
  displayName: 'Jean-Louis GUENEGO',
  jobTitle: 'Administrateur',
  email: 'jlguenego@gmail.com',
  phone: '+33612341234',
  gender: Gender.MALE,
}

export const adminPrivilege: New<Privilege> = {
  name: 'admin',
  readOnlyFunctionalities: [...readOnlyFunctionalities],
  mutationFunctionalities: [...mutationFunctionalities],
  description: "Un administrateur a accès à toutes les fonctionnalités de l'application",
}

export const adminGroup: New<Group> = {
  name: 'admin',

  description:
    "Le groupe administrateur possède juste le privilège administrateur qui permet d'accéder à toutes les fonctionnalités de l'application.",
  privilegeIds: [],
  userIds: [],
}
