<script setup lang="ts">
import { useAuthenticationStore } from '@/authnz/stores/AuthenticationStore'
import { useRouter } from 'vue-router'
import PageLayout from '@/layout/page/PageLayout.vue'

const authenticationStore = useAuthenticationStore()
const router = useRouter()

const handleLogout = async () => {
  await authenticationStore.logout()
  await router.replace('/')
}

const menus = [
  { label: 'Gérer les utilisateurs', to: '/users' },
  { label: 'Gérer les rôles', to: '/roles' },
  { label: 'Gérer les privilèges', to: '/privileges' },
]
</script>

<template>
  <PageLayout class="self-stretch" v-if="authenticationStore.user">
    <header>
      <h1>Bienvenue {{ authenticationStore.user.displayName }} !</h1>
    </header>
    <main class="grow">
      <p>Vos rôles : Admin, Gérant de portefeuille Truc, Gérant du portefeuille Trac</p>
      <p>Voici vos modules</p>
      <nav class="flex flex-wrap gap-2">
        <RouterLink v-for="item in menus" :key="item.label" :to="item.to" class="button">
          {{ item.label }}
        </RouterLink>
      </nav>
    </main>
    <footer>
      <button class="danger" @click="handleLogout()">Se déconnecter</button>
    </footer>
  </PageLayout>
</template>
