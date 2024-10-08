import LoadingIcon from './components/LoadingIcon.vue'
import type { vFocus } from './directives/FocusDirective'
import SelectItems from './components/forms/SelectItems.vue'
import PasswordInput from './components/forms/PasswordInput.vue'

declare module 'vue' {
  export interface GlobalComponents {
    LoadingIcon: typeof LoadingIcon
    SelectItems: typeof SelectItems
    PasswordInput: typeof PasswordInput
  }
  export interface ComponentCustomProperties {
    vFocus: typeof vFocus
  }
}
