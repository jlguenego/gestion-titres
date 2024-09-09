import type { PiniaPlugin } from 'pinia'

export const piniaPersist: PiniaPlugin = ({ store }) => {
  const key = `piniaState.${store.$id}`

  store.$subscribe((mutation, state) => {
    localStorage.setItem(key, JSON.stringify(state))
  })

  const str = localStorage.getItem(key)
  if (str === null) {
    localStorage.setItem(key, JSON.stringify(store.$state))
    return
  }
  store.$patch(JSON.parse(str))
}
