<script setup lang="ts">
import { ref } from 'vue'
import type { Menu } from '../interfaces/Menu'
import MenuWidget from './MenuWidget.vue'
import { menuDefaults } from '@/menus/menus'

const menus = ref<Menu[]>(menuDefaults)
</script>

<template>
  <div class="no-scrollbar flex h-full flex-col justify-between gap-6 overflow-auto pt-4">
    <nav class="flex flex-col border-gray-200">
      <div v-for="item in menus" :key="item.label">
        <MenuWidget :menu="item" />
      </div>
    </nav>

    <footer class="flex shrink-0 flex-col items-center bg-gray-100 text-gray-500">
      <RouterLink to="/legal" class="w-full grow p-2 text-center hover:bg-gray-200">
        Mentions Légales
      </RouterLink>
    </footer>
  </div>
</template>
