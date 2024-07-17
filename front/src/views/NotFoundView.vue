<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <PageLayout class="self-stretch">
    <HeaderPage>
      <h1>Page non trouvée</h1>
    </HeaderPage>
    <MainPage>
      <div class="flex grow flex-col justify-center gap-12">
        <span class="text-center text-2xl font-bold sm:text-3xl">Page non trouvée... 😭</span>
        <RouterLink to="/" class="button primary">
          <HomeIcon class="size-6" />
          <span>Accueil</span>
        </RouterLink>
      </div>
    </MainPage>
  </PageLayout>
</template>
