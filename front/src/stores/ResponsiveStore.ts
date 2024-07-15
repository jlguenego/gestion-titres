import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResponsiveStore = defineStore('responsive', () => {
  const screenWidth = ref(0)

  return { screenWidth }
})
