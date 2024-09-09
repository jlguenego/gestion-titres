import { clone } from '@/utils/misc'
import localforage from 'localforage'
import type { PiniaPlugin } from 'pinia'

const sendEvent = (storeId: string) => {
  document.body.dispatchEvent(new Event(storeId + '_ready'))
}

export const piniaPersist: PiniaPlugin = ({ store }) => {
  ;(async () => {
    const key = `piniaState.${store.$id}`

    store.$subscribe((mutation, state) => {
      ;(async () => {
        await localforage.setItem(key, clone(state))
      })()
    })

    const obj: object | null = await localforage.getItem(key)
    if (obj === null) {
      localforage.setItem(key, clone(store.$state))
      sendEvent(store.$id)
      return
    }
    store.$patch(obj)
    sendEvent(store.$id)
  })()
}
