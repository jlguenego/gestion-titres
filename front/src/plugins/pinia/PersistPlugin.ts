import localforage from 'localforage'
import type { PiniaPlugin } from 'pinia'

export const piniaPersist: PiniaPlugin = ({ store }) => {
  ;(async () => {
    const key = `piniaState.${store.$id}`

    store.$subscribe((mutation, state) => {
      ;(async () => {
        await localforage.setItem(key, state)
      })()
    })

    try {
      const str: string | null = await localforage.getItem(key)
      if (str === null) {
        await localforage.setItem(key, JSON.stringify(store.$state))
        return
      }
      store.$patch(JSON.parse(str))
    } catch (err) {
      console.log('err: ', err)
    }
  })()
}
