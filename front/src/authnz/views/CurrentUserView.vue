<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthenticationStore } from '../stores/AuthenticationStore'

const authenticationStore = useAuthenticationStore()
const router = useRouter()

const handleLogout = async () => {
  await authenticationStore.logout()
  await router.replace('/')
}
</script>

<template>
  <PageLayout class="max-w-96 gap-9" v-if="authenticationStore.user">
    <h1>Utilisateur : {{ authenticationStore.user.displayName }}</h1>
    <button class="button danger" @click="handleLogout()">Se déconnecter</button>
  </PageLayout>
</template>
