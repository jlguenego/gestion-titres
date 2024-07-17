<script setup lang="ts">
import { useAuthenticationStore } from '@/authnz/stores/AuthenticationStore'
import PageLayout from '@/layout/page/PageLayout.vue'
import { useMenuStore } from '@/layout/stores/MenuStore'
import { isDesktop } from '@/utils/responsive'
import { useRouter } from 'vue-router'

const authenticationStore = useAuthenticationStore()
const menuStore = useMenuStore()
const router = useRouter()

if (isDesktop()) {
  menuStore.openMenu()
}

const handleLogout = async () => {
  await authenticationStore.logout()
  await router.replace('/')
}
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
      <button class="danger self-center" @click="handleLogout()">Se deconnecter</button>
    </MainPage>
  </PageLayout>
</template>
