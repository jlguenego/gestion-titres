import LoadingIcon from './components/LoadingIcon.vue'
import type { vFocus } from './directives/FocusDirective'
import SelectItems from './components/forms/SelectItems.vue'

declare module 'vue' {
  export interface GlobalComponents {
    LoadingIcon: typeof LoadingIcon
    SelectItems: typeof SelectItems
  }
  export interface ComponentCustomProperties {
    vFocus: typeof vFocus
  }
}
