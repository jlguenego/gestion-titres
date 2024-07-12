export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export interface User {
  id: string
  username: string
  displayName: string
  password: string
  jobTitle?: string
  phone?: string
  email?: string
  gender?: Gender
}
