import { nextTick } from 'vue'
import type { NavigationHookAfter } from 'vue-router'

export const titleGuard: NavigationHookAfter = (to) => {
  const DEFAULT_TITLE = 'Gestion Titres'
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  nextTick(() => {
    const elt = document.querySelector('h1')
    if (elt !== null) {
      window.document.title = `${DEFAULT_TITLE} - ${elt.innerText}`
      return
    }
    if (typeof to.meta.title === 'string') {
      window.document.title = `${DEFAULT_TITLE} - ${to.meta.title}`
      return
    }
    window.document.title = DEFAULT_TITLE
  })
}
