<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthenticationStore } from '../AuthenticationStore'

const authenticationStore = useAuthenticationStore()
const router = useRouter()

const handleLogout = async () => {
  await authenticationStore.logout()
  await router.replace('/')
}
</script>

<template>
  <main class="flex grow items-start justify-center" v-if="authenticationStore.user">
    <div class="page max-w-96 gap-9">
      <h1>Utilisateur : {{ authenticationStore.user.displayName }}</h1>
      <button class="danger" @click="handleLogout()">Se déconnecter</button>
    </div>
  </main>
</template>
