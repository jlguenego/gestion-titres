import type { New } from '@/interfaces/utilities'
import { Gender, type User } from '../interfaces/User'

export const firstUser: New<User> = {
  username: 'admin',
  password: 'truc1234!',
  displayName: 'Jean-Louis GUENEGO',
  jobTitle: 'Administrateur',
  email: 'jlguenego@gmail.com',
  phone: '+33612341234',
  gender: Gender.MALE,
}
