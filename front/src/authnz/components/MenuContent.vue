<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthenticationStore } from '../stores/AuthenticationStore'

const router = useRouter()
const authenticationStore = useAuthenticationStore()

const menus = [
  { label: 'Accueil', to: '/welcome' },
  { label: 'Gérer les utilisateurs', to: '/users' },
  { label: 'Gérer les rôles', to: '/roles' },
  { label: 'Gérer les privilèges', to: '/privileges' },
  { label: 'Gérer la base de données', to: '/database' },
]
</script>

<template>
  <div class="flex h-full flex-col justify-between gap-6 pt-4">
    <nav class="flex flex-col divide-y border-y border-gray-200">
      <RouterLink
        v-for="item in menus"
        :key="item.label"
        :to="item.to"
        class="flex p-2 hover:bg-gray-100"
      >
        {{ item.label }}
      </RouterLink>
    </nav>

    <footer class="flex flex-col gap-2">
      <RouterLink to="/legal" class="grow bg-gray-100 p-2 text-center hover:bg-gray-200">
        Mentions Légales
      </RouterLink>
    </footer>
  </div>
</template>
