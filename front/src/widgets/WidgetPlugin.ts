import type { Plugin } from 'vue'
import { vFocus } from './directives/FocusDirective'
import LoadingIcon from './components/LoadingIcon.vue'
import SelectItems from './components/forms/SelectItems.vue'
import PasswordInput from './components/forms/PasswordInput.vue'

export const widget: Plugin<[]> = (app) => {
  app.directive('focus', vFocus)
  app.component('LoadingIcon', LoadingIcon)
  app.component('SelectItems', SelectItems)
  app.component('PasswordInput', PasswordInput)
}
