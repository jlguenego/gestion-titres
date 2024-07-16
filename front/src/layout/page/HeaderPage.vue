<script lang="ts" setup>
import { Bars3Icon, ChevronLeftIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useMenuStore } from '../stores/MenuStore'

const menuStore = useMenuStore()

withDefaults(
  defineProps<{
    menu?: boolean
  }>(),
  {
    menu: true,
  },
)
</script>

<template>
  <header class="flex w-full items-center justify-between bg-black text-white">
    <nav class="flex">
      <button
        @click="menuStore.toggleMenu()"
        class="hidden rounded-none bg-transparent text-white hover:bg-gray-700 sm:flex"
        v-if="menuStore.showMenu === false && $props.menu"
      >
        <Bars3Icon class="size-6" />
      </button>
      <button
        @click="$router.back()"
        class="flex rounded-none bg-transparent text-white hover:bg-gray-700"
      >
        <ChevronLeftIcon class="size-6" />
      </button>
    </nav>
    <slot></slot>
    <RouterLink to="/" class="button flex rounded-none bg-transparent text-white hover:bg-gray-700">
      <XMarkIcon class="size-6" />
    </RouterLink>
  </header>
</template>
