<script setup lang="ts">
import { useAuthenticationStore } from '@/authnz/stores/AuthenticationStore'
import { useMenuPageStore } from '@/layout/stores/MenuPageStore'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/outline'

const authenticationStore = useAuthenticationStore()

const menuPageStore = useMenuPageStore()
menuPageStore.hideMenu()
</script>

<template>
  <div class="flex h-48 flex-col items-center justify-center gap-4 p-2">
    <span class="text-center text-2xl font-bold text-white sm:text-4xl">
      La gestion efficace de vos titres !
    </span>
    <RouterLink v-if="authenticationStore.user === undefined" to="/login" class="button">
      <ArrowRightEndOnRectangleIcon class="size-6" />
      <span>Se connecter</span>
    </RouterLink>
    <RouterLink v-else to="/welcome" class="button">
      <ArrowRightEndOnRectangleIcon class="size-6" />
      <span>Démarrer</span>
    </RouterLink>
  </div>
</template>
