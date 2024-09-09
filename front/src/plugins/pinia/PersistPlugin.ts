import { clone } from '@/utils/misc'
import localforage from 'localforage'
import type { PiniaPlugin } from 'pinia'

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
      return
    }
    store.$patch(obj)
    const eventName = store.$id + '_ready'
    console.log('eventName: ', eventName)
    console.log('about to send')
    document.body.dispatchEvent(new Event(eventName))
  })()
}
