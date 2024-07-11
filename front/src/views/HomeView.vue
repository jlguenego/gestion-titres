<script setup lang="ts">
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="flex h-48 flex-col items-center justify-center gap-4 p-2">
    <span class="text-center text-2xl font-bold text-white md:text-4xl">
      La gestion efficace de vos titres !
    </span>
    <RouterLink to="/login" class="button">
      <ArrowRightEndOnRectangleIcon class="size-6" />
      <span>Se connecter</span>
    </RouterLink>
  </div>
</template>
