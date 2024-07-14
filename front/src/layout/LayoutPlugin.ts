import type { Plugin } from 'vue'
import PageLayout from './page/PageLayout.vue'

export const layout: Plugin<[]> = (app) => {
  app.component('PageLayout', PageLayout)
}
