import { nextTick } from 'vue'

export const titleGuard = (to) => {
  const DEFAULT_TITLE = 'Gestion Titres'
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  nextTick(() => {
    if (typeof to.meta.title === 'string') {
      window.document.title = `${DEFAULT_TITLE} - ${to.meta.title}`
      return
    }
    window.document.title = DEFAULT_TITLE
  })
}
