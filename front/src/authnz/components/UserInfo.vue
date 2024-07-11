<script lang="ts" setup>
import { UserIcon } from '@heroicons/vue/24/outline'
import { useAuthenticationStore } from '../AuthenticationStore'

const authenticationStore = useAuthenticationStore()
</script>

<template>
  <RouterLink v-if="authenticationStore.user" to="/current-user" class="button layout p-2 sm:px-4">
    <UserIcon class="size-6" />
    <span class="hidden sm:inline">{{ authenticationStore.user.displayName }}</span>
  </RouterLink>
</template>
