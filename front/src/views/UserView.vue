<script setup lang="ts">
const users = [
  { label: 'Jean-Louis GUENEGO', to: '/' },
  { label: 'Betina GERECHT', to: '/' },
  { label: 'Yann LEGEREC', to: '/' },
  { label: 'Jean-Louis GUENEGO', to: '/' },
  { label: 'Betina GERECHT', to: '/' },
  { label: 'Yann LEGEREC', to: '/' },
  { label: 'Jean-Louis GUENEGO', to: '/' },
  { label: 'Betina GERECHT', to: '/' },
  { label: 'Yann LEGEREC', to: '/' },
  { label: 'Jean-Louis GUENEGO', to: '/' },
  { label: 'Betina GERECHT', to: '/' },
  { label: 'Yann LEGEREC', to: '/' },
]
</script>

<template>
  <main class="grow">
    <div class="page h-full max-w-2xl">
      <h1>Liste des utilisateurs</h1>

      <nav class="flex flex-col gap-2">
        <RouterLink v-for="item in users" :key="item.label" :to="item.to" class="button">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </main>
</template>
