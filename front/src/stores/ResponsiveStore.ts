import { isDesktop } from '@/utils/responsive'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type ResponsiveMode = 'mobile' | 'desktop'

const getMode = (): ResponsiveMode => {
  let result: ResponsiveMode = 'mobile'
  if (isDesktop()) {
    result = 'desktop'
  }
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

  const isMobile = computed(() => mode.value === 'mobile')
  const isDesktop = computed(() => mode.value === 'desktop')

  return { mode, isMobile, isDesktop }
})
