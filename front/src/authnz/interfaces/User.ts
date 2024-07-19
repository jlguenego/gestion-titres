export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export interface User {
  id: string
  name: string
  displayName: string
  password: string
  jobTitle?: string
  phone?: string
  email?: string
  gender?: Gender
}
