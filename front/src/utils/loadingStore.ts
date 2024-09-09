import { ref } from 'vue'

export const loadingStore = (storeName: string): { waitUntilReady: () => Promise<void> } => {
  const isReady = ref(false)
  const waitUntilReady = (): Promise<void> => {
    return new Promise((resolve) => {
      if (isReady.value === true) {
        resolve()
        return
      }
      document.body.addEventListener(
        storeName + '_ready',
        () => {
          console.log('catched authentication_ready')
          isReady.value = true
          resolve()
        },
        { once: true },
      )
    })
  }
  return { waitUntilReady }
}
