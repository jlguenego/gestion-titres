import { fakeBackendFetch } from '@/fakebackend/fakeBackendFetch'
import { clone } from '@/utils/misc'

const testUrl = '/test/backend'
const notFoundUrl = '/test/must-not-exist'

const testIfRealBackEnd = async () => {
  try {
    const response = await fetch(testUrl)
    await response.json()
    return true
  } catch (err) {
    console.log('using fake backend')
    return false
  }
}

export const hasRealBackend = await testIfRealBackEnd()

const response404 = await fetch(notFoundUrl)

export const getFetch = () => {
  return hasRealBackend ? window.fetch : fakeBackendFetch
}

export const getResponseModel = () => {
  return clone(response404)
}
