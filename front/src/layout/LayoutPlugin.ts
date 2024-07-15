import type { Plugin } from 'vue'
import BodyPage from './page/BodyPage.vue'
import FooterPage from './page/FooterPage.vue'
import HeaderPage from './page/HeaderPage.vue'
import MainPage from './page/MainPage.vue'
import MenuPage from './page/MenuPage.vue'
import PageLayout from './page/PageLayout.vue'

export const layout: Plugin<[]> = (app) => {
  app.component('PageLayout', PageLayout)
  app.component('HeaderPage', HeaderPage)
  app.component('FooterPage', FooterPage)
  app.component('MainPage', MainPage)
  app.component('MenuPage', MenuPage)
  app.component('BodyPage', BodyPage)
}
