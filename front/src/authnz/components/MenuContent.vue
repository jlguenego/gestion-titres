<script setup lang="ts">
import { ref } from 'vue'
import type { Menu } from '../interfaces/Menu'
import MenuWidget from './MenuWidget.vue'

const menus = ref<Menu[]>([
  { label: 'Accueil', to: '/welcome', type: 'item' },
  {
    label: 'Paramétrage',
    type: 'directory',
    content: [
      { label: 'Gérer les utilisateurs', to: '/users', type: 'item' },
      { label: 'Gérer les groupes', to: '/groups', type: 'item' },
      { label: 'Gérer les privilèges', to: '/privileges', type: 'item' },
      { label: 'Gérer la base de données', to: '/database', type: 'item' },
      {
        label: 'Paramétrage',
        type: 'directory',
        content: [
          { label: 'Gérer les utilisateurs', to: '/users', type: 'item' },
          { label: 'Gérer les groupes', to: '/groups', type: 'item' },
          { label: 'Gérer les privilèges', to: '/privileges', type: 'item' },
          { label: 'Gérer la base de données', to: '/database', type: 'item' },
        ],
      },
    ],
  },
])

const buildDate = BUILD_DATE
</script>

<template>
  <div class="flex h-full flex-col justify-between gap-6 pt-4">
    <nav class="flex flex-col divide-y border-y border-gray-200">
      <div v-for="item in menus" :key="item.label">
        <MenuWidget :menu="item" />
      </div>
    </nav>

    <footer class="flex flex-col items-center gap-2 bg-gray-100">
      <div class="p-2">#Fab: {{ buildDate }}</div>
      <RouterLink to="/legal" class="w-full grow p-2 text-center hover:bg-gray-200">
        Mentions Légales
      </RouterLink>
    </footer>
  </div>
</template>
