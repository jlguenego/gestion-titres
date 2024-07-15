<script lang="ts" setup>
import { Bars3Icon, ChevronLeftIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useMenuStore } from '../stores/MenuStore'

const menuStore = useMenuStore()

withDefaults(
  defineProps<{
    showMenu: boolean
  }>(),
  {
    showMenu: true,
  },
)
</script>

<template>
  <header class="flex w-full items-center justify-between bg-black text-white">
    <nav class="flex">
      <button
        @click="menuStore.toggleMenu()"
        class="hidden bg-transparent text-white sm:flex"
        v-if="menuStore.showMenu === false && $props.showMenu"
      >
        <Bars3Icon class="size-6" />
      </button>
      <button @click="$router.back()" class="bg-transparent text-white">
        <ChevronLeftIcon class="size-6" />
      </button>
    </nav>
    <slot></slot>
    <RouterLink to="/" class="button bg-transparent text-white">
      <XMarkIcon class="size-6" />
    </RouterLink>
  </header>
</template>
