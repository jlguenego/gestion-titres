import type { Plugin } from 'vue'
import { vFocus } from './directives/FocusDirective'

export const widget: Plugin<[]> = (app) => {
  app.directive('focus', vFocus)
}
