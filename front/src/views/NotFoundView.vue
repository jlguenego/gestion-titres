<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <main>
    <div class="page w-full">
      <h1 class="text-2xl">Page non trouvée... 😭</h1>
      <RouterLink to="/" class="button primary">
        <HomeIcon class="size-6" />
        <span>Accueil</span>
      </RouterLink>
    </div>
  </main>
</template>
