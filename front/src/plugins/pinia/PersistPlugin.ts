import type { PiniaPlugin } from 'pinia'

export const piniaPersist: PiniaPlugin = ({ options, store }) => {
  console.log('store: ', store)
  console.log('options: ', options)

  const key = `piniaState.${store.$id}`

  store.$subscribe((mutation, state) => {
    console.log('mutation: ', mutation)
    console.log('state: ', state)

    localStorage.setItem(key, JSON.stringify(state))
  })

  const str = localStorage.getItem(key)
  if (str === null) {
    localStorage.setItem(key, JSON.stringify(store.$state))
    return
  }
  store.$patch(JSON.parse(str))
}
