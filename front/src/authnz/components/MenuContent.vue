<script setup lang="ts">
import { ref } from 'vue'
import type { Menu } from '../interfaces/Menu'
import MenuWidget from './MenuWidget.vue'
import { menuDefaults } from '@/menus/menus'

const menus = ref<Menu[]>(menuDefaults)

const buildDate = BUILD_DATE
</script>

<template>
  <div class="flex h-full flex-col justify-between gap-6 pt-4">
    <nav class="flex flex-col border-gray-200">
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
