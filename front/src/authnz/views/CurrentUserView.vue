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
  <PageLayout class="self-stretch" v-if="authenticationStore.user">
    <HeaderPage>
      <h1>{{ authenticationStore.user.displayName }}</h1>
    </HeaderPage>
    <MainPage>
      <p>Groupe(s) : Administrateurs</p>

      <button class="button danger" @click="handleLogout()">Se déconnecter</button>
    </MainPage>
  </PageLayout>
</template>
