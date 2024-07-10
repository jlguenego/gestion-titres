<script setup lang="ts">
const menus = [
  { label: 'Gérer les utilisateurs', to: '/users' },
  { label: 'Gérer les rôles', to: '/roles' },
  { label: 'Gérer les privilèges', to: '/privileges' }
]
</script>

<template>
  <div class="page h-full">
    <h1>Bienvenue Jean-Louis GUENEGO !</h1>
    <p>Vos rôles : Admin, Gérant de portefeuille Truc, Gérant du portefeuille Trac</p>
    <p>Voici vos modules</p>
    <nav class="flex flex-wrap gap-2">
      <RouterLink v-for="item in menus" :key="item.label" :to="item.to" class="button">
        {{ item.label }}
      </RouterLink>
    </nav>
  </div>
</template>
