import { fakeBackendFetch } from '@/fakebackend/fakeBackendFetch'
import { clone } from '@/utils/misc'

const testUrl = '/test/backend'
const notFoundUrl = '/test/must-not-exist'

interface BackendConfig {
  hasRealBackend: boolean | undefined
  response404: Response | undefined
}

export const backendConfig: BackendConfig = {
  hasRealBackend: undefined,
  response404: undefined,
}

const checkRealBackend = async () => {
  if (backendConfig.hasRealBackend !== undefined) {
    return
  }
  try {
    const response = await fetch(testUrl)
    await response.json()
    backendConfig.hasRealBackend = true
  } catch (err) {
    console.log('using fake backend')
    backendConfig.hasRealBackend = false
  }
}

const getResponse404 = async () => {
  if (backendConfig.response404 !== undefined) {
    return backendConfig.response404
  }
  backendConfig.response404 = await fetch(notFoundUrl)
  return backendConfig.response404
}

export const getFetch = async () => {
  await checkRealBackend()
  return backendConfig.hasRealBackend ? window.fetch : fakeBackendFetch
}

export const getResponseModel = async (): Promise<Response> => {
  const response404 = await getResponse404()
  return clone(response404)
}
