<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <PageLayout class="w-full gap-12 p-12">
    <h1 class="text-2xl">Page non trouvée... 😭</h1>
    <RouterLink to="/" class="button primary">
      <HomeIcon class="size-6" />
      <span>Accueil</span>
    </RouterLink>
  </PageLayout>
</template>
