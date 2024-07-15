import type { Plugin } from 'vue'
import { vFocus } from './directives/FocusDirective'
import LoadingIcon from './components/LoadingIcon.vue'

export const widget: Plugin<[]> = (app) => {
  app.directive('focus', vFocus)
  app.component('LoadingIcon', LoadingIcon)
}
