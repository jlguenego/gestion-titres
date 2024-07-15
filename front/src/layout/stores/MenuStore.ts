import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const showMenu = ref(false)

  const toggleMenu = () => {
    showMenu.value = !showMenu.value
    console.log('showMenu.value: ', showMenu.value)
  }

  const openMenu = () => {
    showMenu.value = true
    console.log('showMenu.value: ', showMenu.value)
  }
  const hideMenu = () => {
    showMenu.value = false
    console.log('showMenu.value: ', showMenu.value)
  }

  return { showMenu, toggleMenu, openMenu, hideMenu }
})
