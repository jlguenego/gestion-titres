import PageLayout from './page/PageLayout.vue'
import HeaderPage from './page/HeaderPage.vue'
import FooterPage from './page/FooterPage.vue'
import MainPage from './page/MainPage.vue'
import MenuPage from './page/MenuPage.vue'
import BodyPage from './page/BodyPage.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PageLayout: typeof PageLayout
    HeaderPage: typeof HeaderPage
    FooterPage: typeof FooterPage
    MainPage: typeof MainPage
    MenuPage: typeof MenuPage
    BodyPage: typeof BodyPage
  }
}
