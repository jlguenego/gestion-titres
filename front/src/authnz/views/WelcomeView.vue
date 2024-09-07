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
        <p>Vos <RouterLink to="/favorites" class="link">favoris</RouterLink> :</p>
        <FavoriteList />
      </section>
    </MainPage>
  </PageLayout>
</template>
