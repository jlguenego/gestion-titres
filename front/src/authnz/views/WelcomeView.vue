<script setup lang="ts">
import { useAuthenticationStore } from '@/authnz/stores/AuthenticationStore'
import PageLayout from '@/layout/page/PageLayout.vue'
import FavoriteList from '@/favorites/FavoriteList.vue'

import { useMenuStore } from '@/layout/stores/MenuStore'
import { isDesktop } from '@/utils/responsive'

const authenticationStore = useAuthenticationStore()
const menuStore = useMenuStore()

if (isDesktop()) {
  menuStore.openMenu()
}
</script>

<template>
  <PageLayout class="self-stretch" v-if="authenticationStore.user">
    <HeaderPage>
      <h1>Bienvenue {{ authenticationStore.user.displayName }} !</h1>
    </HeaderPage>

    <MainPage>
      <section>
        <p>Vos favoris :</p>
        <FavoriteList />
      </section>
      <section class="bg-gray-100 shadow-md">
        <p>
          Ce logiciel se propose de succéder de
          <a class="link" href="http://wintit.com/" target="_blank">Wintit</a>. Il est
          progressivement refondu pour diverses raisons :
        </p>
        <ul>
          <li>
            <strong>Etre maintenable</strong> par des ingénieurs informatiques connaissant les
            nouvelles technologies Web. Ils sont moins chers et plus faciles à trouver sur le marché
            que des ingénieurs Cobol NetExpress.
          </li>
          <li>
            Etre <strong>esthétique et ergonomique</strong>. Avoir davantage de possibilité dans le
            développement d'écran visuel.
          </li>
          <li>
            Etre <strong>accessible</strong> : depuis une plus grande variétés de terminaux
            (Ordinateur PC, Tablette, Smartphone), décliné en client lourd (Application Windows), ou
            léger (Site Web Responsive), ou mobile (Application Mobile)
          </li>
        </ul>
        <p>
          Vous pouvez reconnaître les menus de Wintit et leurs écrans correspondant, refondus en
          web. Bonne utilisation !
        </p>
      </section>
    </MainPage>
  </PageLayout>
</template>
