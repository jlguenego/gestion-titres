import { ResourceAPI } from '@/authnz/api/ResourceAPI'
import { ErrorMessage } from '@/authnz/interfaces/ErrorMessage'
import type { User } from '@/authnz/interfaces/User'
import { clone } from '@/utils/misc'

const responseTest = await fetch('/improbable')

const resourceAPI = new ResourceAPI<User>('user')

export const fakeBackendFetch: typeof window.fetch = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => {
  console.log('input: ', input)
  console.log('init: ', init)

  const credentials = JSON.parse(init?.body as string)

  const users = await resourceAPI.retrieveAll()
  const user = users.find(
    (u) => u.name === credentials.username && u.password === credentials.password,
  )
  if (user === undefined) {
    throw new Error(ErrorMessage.BAD_LOGIN)
  }

  const response = clone(responseTest)
  response.json = async () => {
    return user
  }
  return response
}
