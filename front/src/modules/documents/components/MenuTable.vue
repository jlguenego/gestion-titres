<script setup lang="ts">
import { collapse } from '@/utils/menu'
import MenuDocWidget from './MenuDocWidget.vue'
import { useMenuStore } from '@/authnz/stores/MenuStore'
import { ref } from 'vue'
import type { Menu } from '@/authnz/interfaces/Menu'

const menuStore = useMenuStore()
const cloneMenus = JSON.parse(JSON.stringify(menuStore.menus))
for (const menu of cloneMenus) {
  collapse(menu)
}
const menus = ref<Menu[]>(cloneMenus)
</script>

<template>
  <h1>Table des matières de menu</h1>
  <p>Cliquer sur un élément de menu pour obtenir sa documentation.</p>

  <nav class="relative flex flex-col border-gray-200">
    <div v-for="item in menus" :key="item.label">
      <MenuDocWidget :menu="item" />
    </div>
  </nav>
</template>
