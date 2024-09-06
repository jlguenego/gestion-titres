<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline'
import { useAuthenticationStore } from '../authnz/stores/AuthenticationStore'

const authenticationStore = useAuthenticationStore()

const page = authenticationStore.user ? '/welcome' : '/'
</script>

<template>
  <PageLayout class="self-stretch">
    <HeaderPage>
      <h1>Page non trouvée</h1>
    </HeaderPage>
    <MainPage>
      <div class="flex grow flex-col justify-center gap-12">
        <span class="text-center text-2xl font-bold sm:text-3xl">
          🚜🚜🚜 <br />
          Page en cours d'implémentation... <br />
          🚜🚜🚜
        </span>
        <RouterLink :to="page" class="button primary">
          <HomeIcon class="size-6" />
          <span>Accueil</span>
        </RouterLink>
      </div>
    </MainPage>
  </PageLayout>
</template>
