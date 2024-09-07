import type { RouteLocationNormalizedGeneric } from 'vue-router'

export const querySelector = <T extends Element>(selector: string, type?: new () => T) => {
  const elt = document.querySelector(selector)
  console.log('elt: ', elt)
  if (elt === null) {
    throw new Error(`Cannot find selector: ${selector}`)
  }
  if (type && !(elt instanceof type)) {
    throw new Error(
      `Selector (${selector}) found, but not instance of type ${type.constructor.name}`,
    )
  }
  return elt as T
}

export const scrollToMenu = (to: RouteLocationNormalizedGeneric) => {
  if (!('href' in to)) {
    throw new Error('no href in to')
  }
  querySelector(`.menu-content a[href="${to.href}"]`).scrollIntoView({
    behavior: 'instant',
    block: 'nearest',
    inline: 'nearest',
  })
}
