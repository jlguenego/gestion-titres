<script setup lang="ts">
import { useAuthenticationStore } from '../AuthenticationStore'

const authenticationStore = useAuthenticationStore()
</script>

<template>
  <main class="flex grow items-start justify-center" v-if="authenticationStore.user">
    <div class="page max-w-96">
      <h1>Utilisateur : {{ authenticationStore.user.displayName }}</h1>
    </div>
  </main>
</template>
