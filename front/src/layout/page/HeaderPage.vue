<script lang="ts" setup>
import { Bars3Icon, ChevronLeftIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useMenuStore } from '../stores/MenuStore'

const menuStore = useMenuStore()

const props = withDefaults(
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
        class="button hidden rounded-none bg-transparent text-white hover:bg-gray-700 sm:flex"
        v-if="props.menu && menuStore.showMenu === false"
      >
        <Bars3Icon class="size-6" />
      </button>
      <button
        @click="$router.back()"
        class="button flex rounded-none bg-transparent text-white hover:bg-gray-700"
        title="Page précédente"
      >
        <ChevronLeftIcon class="size-6" />
      </button>
    </nav>
    <slot></slot>
    <RouterLink
      title="Fermer"
      to="/"
      class="button flex rounded-none bg-transparent text-white hover:bg-gray-700"
    >
      <XMarkIcon class="size-6" />
    </RouterLink>
  </header>
</template>
