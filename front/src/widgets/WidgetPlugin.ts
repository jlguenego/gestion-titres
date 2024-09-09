import type { Plugin } from 'vue'
import { vFocus } from './directives/FocusDirective'
import LoadingIcon from './components/LoadingIcon.vue'
import SelectItems from './components/forms/SelectItems.vue'

export const widget: Plugin<[]> = (app) => {
  app.directive('focus', vFocus)
  app.component('LoadingIcon', LoadingIcon)
  app.component('SelectItems', SelectItems)
}
