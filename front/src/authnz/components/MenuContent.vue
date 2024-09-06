<script setup lang="ts">
import MenuWidget from './MenuWidget.vue'
import { useMenuStore } from '../stores/MenuStore'
import { FolderMinusIcon } from '@heroicons/vue/24/outline'

const menuStore = useMenuStore()
</script>

<template>
  <nav class="sticky flex w-full justify-end gap-2 bg-white px-2">
    <button class="button" @click="menuStore.collapseAll()">
      <FolderMinusIcon class="size-6" />
    </button>
  </nav>
  <div class="no-scrollbar flex h-full flex-col justify-between gap-6 overflow-auto">
    <nav class="relative flex flex-col border-gray-200">
      <div v-for="item in menuStore.menus" :key="item.label">
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
