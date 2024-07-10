<script setup lang="ts">
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <header class="flex h-12 items-center justify-between px-2 text-white">
    <RouterLink to="/" class="flex items-center gap-2 hover:underline">
      <img src="/logo.svg" alt="Logo" />
      <span class="text-xl">Gestion Titres</span>
    </RouterLink>
    <RouterLink to="/login" class="flex hover:underline">
      <ArrowRightEndOnRectangleIcon class="size-6" />
      <span>Se connecter</span>
    </RouterLink>
  </header>
</template>
