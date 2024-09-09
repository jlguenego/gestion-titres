<script setup lang="ts">
import MenuWidget from './MenuWidget.vue'
import { useMenuStore } from '../stores/MenuStore'
import { FolderMinusIcon, FolderPlusIcon } from '@heroicons/vue/24/outline'

const menuStore = useMenuStore()
</script>

<template>
  <nav class="sticky flex w-full justify-end gap-2 bg-white p-2">
    <button class="flat-button" @click="menuStore.expandAll()">
      <FolderPlusIcon class="size-6" />
    </button>
    <button class="flat-button" @click="menuStore.collapseAll()">
      <FolderMinusIcon class="size-6" />
    </button>
  </nav>
  <div class="menu-content no-scrollbar flex h-full flex-col justify-between gap-6 overflow-auto">
    <nav class="relative flex flex-col border-gray-200">
      <div v-for="item in menuStore.menu.content" :key="item.label">
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
