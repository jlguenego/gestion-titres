<script lang="ts" setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useMenuStore } from './stores/MenuStore'

const menuStore = useMenuStore()
</script>

<template>
  <div class="flex grow gap-2">
    <aside
      :class="{ hidden: !menuStore.showMenu }"
      class="flex w-72 flex-col overflow-hidden rounded-2xl bg-white"
    >
      <header class="flex w-full items-center justify-between bg-black text-white">
        <h1 class="px-4">Menu</h1>
        <button @click="menuStore.toggleMenu()" class="bg-transparent text-white">
          <XMarkIcon class="size-6" />
        </button>
      </header>
    </aside>
    <main class="flex grow items-start justify-center">
      <router-view></router-view>
    </main>
  </div>
</template>
