import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const showMenu = ref(false)

  const toggleMenu = () => {
    showMenu.value = !showMenu.value
  }

  const openMenu = () => {
    showMenu.value = true
  }
  const hideMenu = () => {
    showMenu.value = false
  }

  return { showMenu, toggleMenu, openMenu, hideMenu }
})
