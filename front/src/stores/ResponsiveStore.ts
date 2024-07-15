import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ResponsiveMode = 'mobile' | 'desktop'

const getMode = (): ResponsiveMode => {
  let result: ResponsiveMode = 'desktop'
  if (window.screen.width < 640) {
    result = 'mobile'
  }
  console.log('getMode: ', result)
  return result
}

export const useResponsiveStore = defineStore('responsive', () => {
  const mode = ref<ResponsiveMode>(getMode())

  const init = () => {
    window.addEventListener('resize', () => {
      mode.value = getMode()
    })
  }

  init()

  return { mode }
})
