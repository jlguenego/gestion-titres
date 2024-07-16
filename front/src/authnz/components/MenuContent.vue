<script setup lang="ts">
const menus = [
  { label: 'Accueil', to: '/welcome' },
  { label: 'Gérer les utilisateurs', to: '/users' },
  { label: 'Gérer les rôles', to: '/roles' },
  { label: 'Gérer les privilèges', to: '/privileges' },
]
</script>

<template>
  <nav class="flex flex-col divide-y">
    <RouterLink
      v-for="item in menus"
      :key="item.label"
      :to="item.to"
      class="flex p-2 hover:bg-gray-100"
    >
      {{ item.label }}
    </RouterLink>
  </nav>
</template>
