<script setup lang="ts">
import { useMenuStore } from '@/authnz/stores/MenuStore'
import type { MenuDirectory } from '@/interfaces/Menu'
import { collapseAllFrom } from '@/utils/menu.utils'
import { clone } from '@/utils/misc'
import { ref } from 'vue'
import MenuDocWidget from './MenuDocWidget.vue'

const menuStore = useMenuStore()
const cloneMenu = clone(menuStore.menu)
collapseAllFrom(cloneMenu)
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
