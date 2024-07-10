<script setup lang="ts">
const users = [
  { label: 'Jean-Louis GUENEGO', to: '/' },
  { label: 'Betina GERECHT', to: '/' },
  { label: 'Yann LEGEREC', to: '/' }
]
</script>

<template>
  <div class="page h-full">
    <h1>Liste des utilisateurs</h1>

    <nav class="flex gap-2">
      <RouterLink v-for="item in users" :key="item.label" :to="item.to" class="button">
        {{ item.label }}
      </RouterLink>
    </nav>
  </div>
</template>
