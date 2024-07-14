import PageLayout from './page/PageLayout.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PageLayout: typeof PageLayout
  }
}
