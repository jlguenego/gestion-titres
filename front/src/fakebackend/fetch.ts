import { login } from './api/auth/login'
import { getResponseModel } from './utils/response'

export const fakeBackendFetch: typeof window.fetch = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => {
  console.log('input: ', input)
  console.log('init: ', init)

  if (input === '/auth/login') {
    if (init?.method === 'POST') {
      return login(input, init)
    }
  }

  return getResponseModel()
}
