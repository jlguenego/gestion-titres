<script lang="ts" setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useMenuStore } from '../stores/MenuStore'
import { useResponsiveStore } from '@/stores/ResponsiveStore'

const menuStore = useMenuStore()
const responsiveStore = useResponsiveStore()
</script>

<template>
  <aside
    v-if="responsiveStore.isDesktop"
    :class="{ hidden: !menuStore.showMenu }"
    class="flex w-72 flex-col overflow-hidden rounded-2xl bg-white"
  >
    <header class="flex w-full items-center justify-between bg-black text-white">
      <h1 class="px-4">Menu</h1>
      <button @click="menuStore.toggleMenu()" class="bg-transparent text-white">
        <XMarkIcon class="size-6" />
      </button>
    </header>
    <slot></slot>
  </aside>
  <aside
    v-else
    :class="{ hidden: !menuStore.showMenu }"
    class="fixed bottom-0 left-0 right-0 top-16 flex bg-black bg-opacity-20"
  >
    <div class="w-4/5 bg-white">
      <slot></slot>
    </div>
  </aside>
</template>
