<script setup lang="ts">
const menus = [
  { label: 'Accueil', to: '/welcome' },
  { label: 'Gérer les utilisateurs', to: '/users' },
  { label: 'Gérer les groupes', to: '/groups' },
  { label: 'Gérer les privilèges', to: '/privileges' },
  { label: 'Gérer la base de données', to: '/database' },
]

const buildDate = BUILD_DATE
</script>

<template>
  <div class="flex h-full flex-col justify-between gap-6 pt-4">
    <nav class="flex flex-col divide-y border-y border-gray-200">
      <RouterLink
        v-for="item in menus"
        :key="item.label"
        :to="item.to"
        class="flex p-2 hover:bg-gray-100"
      >
        {{ item.label }}
      </RouterLink>
    </nav>

    <footer class="flex flex-col items-center gap-2 bg-gray-100">
      <div class="p-2">#Fab: {{ buildDate }}</div>
      <RouterLink to="/legal" class="w-full grow p-2 text-center hover:bg-gray-200">
        Mentions Légales
      </RouterLink>
    </footer>
  </div>
</template>
