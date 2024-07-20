import { type User, Gender } from '../interfaces/User'

const prefix = import.meta.env.BASE_URL + 'images/application'

export const getImage = (user: User) => {
  if (user.gender === undefined || user.gender === Gender.OTHER) {
    return `${prefix}/user-nogender.svg`
  }
  return user.gender === Gender.MALE ? `${prefix}/user-male.svg` : `${prefix}/user-female.svg`
}
