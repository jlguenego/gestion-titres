import LoadingIcon from './components/LoadingIcon.vue'
import type { vFocus } from './directives/FocusDirective'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LoadingIcon: typeof LoadingIcon
  }
  export interface ComponentCustomProperties {
    vFocus: typeof vFocus
  }
}
