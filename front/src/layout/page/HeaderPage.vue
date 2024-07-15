<script lang="ts" setup>
import { ChevronLeftIcon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header class="flex w-full justify-between bg-black text-white">
    <button @click="$router.back()" class="bg-transparent text-white">
      <ChevronLeftIcon class="size-6" />
    </button>
    <slot></slot>
    <RouterLink to="/" class="button bg-transparent text-white">
      <XMarkIcon class="size-6" />
    </RouterLink>
  </header>
</template>
