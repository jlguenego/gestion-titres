<script setup lang="ts">
import type { MenuDirectory } from '@/authnz/interfaces/Menu'
import { useMenuStore } from '@/authnz/stores/MenuStore'
import { collapse } from '@/utils/menu'
import { ref } from 'vue'
import MenuDocWidget from './MenuDocWidget.vue'

const menuStore = useMenuStore()
const cloneMenu = JSON.parse(JSON.stringify(menuStore.menu))
collapse(cloneMenu)
const menu = ref<MenuDirectory>(cloneMenu)
</script>

<template>
  <h1>Table des matières de menu</h1>
  <p>Cliquer sur un élément de menu pour obtenir sa documentation.</p>

  <nav class="relative flex flex-col border-gray-200">
    <div v-for="item in menu.content" :key="item.label">
      <MenuDocWidget :menu="item" />
    </div>
  </nav>
</template>
