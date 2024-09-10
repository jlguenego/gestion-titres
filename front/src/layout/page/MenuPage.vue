<script lang="ts" setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useMenuPageStore } from '../stores/MenuPageStore'
import { useResponsiveStore } from '@/stores/ResponsiveStore'

const menuStore = useMenuPageStore()
const responsiveStore = useResponsiveStore()
</script>

<template>
  <aside
    v-if="responsiveStore.isDesktop"
    :class="{ hidden: !menuStore.showMenu }"
    class="flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl bg-white"
  >
    <header class="flex w-full items-center justify-between bg-black text-white">
      <h1 class="px-4">Menu</h1>
      <button
        @click="menuStore.toggleMenu()"
        class="button hidden rounded-none bg-transparent text-white hover:bg-gray-700 sm:flex"
        title="Fermer"
      >
        <XMarkIcon class="size-6" />
      </button>
    </header>
    <slot></slot>
  </aside>
  <aside
    v-else
    :class="{ hidden: !menuStore.showMenu }"
    class="fixed bottom-0 left-0 right-0 top-16 flex flex-col bg-black bg-opacity-20"
  >
    <div class="flex w-full flex-col rounded-tr-3xl bg-white shadow-xl shadow-black">
      <header class="flex h-12 w-full items-center justify-center bg-black text-white">
        <h1>Menu</h1>
      </header>
    </div>
    <div class="w-full grow overflow-y-scroll bg-white">
      <slot></slot>
    </div>
  </aside>
</template>
