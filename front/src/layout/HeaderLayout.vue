<script setup lang="ts">
import UserInfo from '@/authnz/components/UserInfo.vue'
</script>

<template>
  <header class="flex h-16 items-center justify-between text-white sm:h-20">
    <RouterLink to="/" class="flex items-center gap-2 hover:text-gray-100">
      <img src="/logo.svg" alt="Logo" />
      <span class="text-xl">Gestion Titres</span>
    </RouterLink>
    <UserInfo />
  </header>
</template>
