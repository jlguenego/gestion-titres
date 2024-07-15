import LoadingIcon from './components/LoadingIcon.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LoadingIcon: typeof LoadingIcon
  }
}
