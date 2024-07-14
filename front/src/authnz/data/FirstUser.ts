import type { New } from '@/interfaces/utilities'
import { Gender, type User } from '../interfaces/User'
import type { Privilege } from '../interfaces/Privilege'

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
  functionalities: ['all'],
}
