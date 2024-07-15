import type { Plugin } from 'vue'
import PageLayout from './page/PageLayout.vue'
import HeaderPage from './page/HeaderPage.vue'

export const layout: Plugin<[]> = (app) => {
  app.component('PageLayout', PageLayout)
  app.component('HeaderPage', HeaderPage)
}
