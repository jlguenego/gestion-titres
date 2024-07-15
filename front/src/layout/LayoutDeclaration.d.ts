import PageLayout from './page/PageLayout.vue'
import HeaderPage from './page/HeaderPage.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PageLayout: typeof PageLayout
    HeaderPage: typeof HeaderPage
  }
}
