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

    try {
      const str: object | null = await localforage.getItem(key)
      if (str === null) {
        await localforage.setItem(key, clone(store.$state))
        return
      }
      store.$patch(str)
    } catch (err) {
      console.log('err: ', err)
    }
  })()
}
