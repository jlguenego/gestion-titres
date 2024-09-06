<script setup lang="ts">
import { useAuthenticationStore } from '@/authnz/stores/AuthenticationStore'
import PageLayout from '@/layout/page/PageLayout.vue'
import { useMenuStore } from '@/layout/stores/MenuStore'
import { isDesktop } from '@/utils/responsive'
import { BookOpenIcon, PlusIcon } from '@heroicons/vue/24/outline'

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
      <p>
        Ce logiciel se propose de succéder de
        <a href="http://wintit.com/" target="_blank">Wintit</a>. Il est progressivement refondu pour
        diverses raisons :
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
        Vous pouvez reconnaître les menus de Wintit et leur écran correspondant, refondu en web.
        Bonne utilisation !
      </p>
      <div class="flex flex-wrap justify-center gap-2">
        <RouterLink class="button" to="/saisie_operation">
          <PlusIcon class="size-6" />
          <span>Saisie opération</span>
        </RouterLink>
        <RouterLink class="button primary" to="/compte_courant">
          <BookOpenIcon class="size-6" />
          <span>Compte Courant</span>
        </RouterLink>
      </div>
    </MainPage>
  </PageLayout>
</template>
