<script setup lang="ts">
import { useAuthenticationStore } from '@/authnz/AuthenticationStore'

const authenticationStore = useAuthenticationStore()

const menus = [
  { label: 'Gérer les utilisateurs', to: '/users' },
  { label: 'Gérer les rôles', to: '/roles' },
  { label: 'Gérer les privilèges', to: '/privileges' },
]
</script>

<template>
  <main>
    <div class="page h-full" v-if="authenticationStore.user">
      <h1>Bienvenue {{ authenticationStore.user.displayName }} !</h1>
      <p>Vos rôles : Admin, Gérant de portefeuille Truc, Gérant du portefeuille Trac</p>
      <p>Voici vos modules</p>
      <nav class="flex flex-wrap gap-2">
        <RouterLink v-for="item in menus" :key="item.label" :to="item.to" class="button">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </main>
</template>
