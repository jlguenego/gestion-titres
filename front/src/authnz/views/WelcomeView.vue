<script setup lang="ts">
import { useAuthenticationStore } from '@/authnz/stores/AuthenticationStore'
import PageLayout from '@/layout/page/PageLayout.vue'
import { useMenuStore } from '@/layout/stores/MenuStore'
import { isDesktop } from '@/utils/responsive'

const authenticationStore = useAuthenticationStore()
const menuStore = useMenuStore()
if (isDesktop()) {
  menuStore.openMenu()
}

const menus = [
  { label: 'Gérer les utilisateurs', to: '/users' },
  { label: 'Gérer les rôles', to: '/roles' },
  { label: 'Gérer les privilèges', to: '/privileges' },
]
</script>

<template>
  <PageLayout class="self-stretch" v-if="authenticationStore.user">
    <HeaderPage>
      <h1>Bienvenue {{ authenticationStore.user.displayName }} !</h1>
    </HeaderPage>

    <MainPage>
      <p>Vos rôles : Admin, Gérant de portefeuille Truc, Gérant du portefeuille Trac</p>
      <p>Voici vos modules</p>
      <nav class="flex flex-wrap gap-2">
        <RouterLink v-for="item in menus" :key="item.label" :to="item.to" class="button">
          {{ item.label }}
        </RouterLink>
      </nav>
    </MainPage>
  </PageLayout>
</template>
