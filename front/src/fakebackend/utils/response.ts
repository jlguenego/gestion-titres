import { clone } from '@/utils/misc'

console.log('init response test')
const responseTest = await fetch('/improbable')

export const getResponseModel = () => {
  return clone(responseTest)
}
