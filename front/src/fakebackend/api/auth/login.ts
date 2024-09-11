import { ResourceAPI } from '@/authnz/api/ResourceAPI'
import { ErrorMessage } from '@/authnz/interfaces/ErrorMessage'
import type { User } from '@/authnz/interfaces/User'
import { getResponseModel } from '@/fakebackend/utils/response'

const resourceAPI = new ResourceAPI<User>('user')

export const login = async (url: string | URL, init: RequestInit) => {
  console.log('fake login')
  const credentials = JSON.parse(init?.body as string)

  const users = await resourceAPI.retrieveAll()
  const user = users.find(
    (u) => u.name === credentials.username && u.password === credentials.password,
  )
  if (user === undefined) {
    throw new Error(ErrorMessage.BAD_LOGIN)
  }

  const response = getResponseModel()
  response.json = async () => {
    return user
  }
  return response
}
