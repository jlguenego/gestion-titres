<script setup lang="ts">
import { useMenuStore } from '@/authnz/stores/MenuStore'

const menuStore = useMenuStore()

const favorites = menuStore.favorites
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <RouterLink
      v-for="(f, index) in favorites"
      :key="f.name"
      class="button"
      :class="{ primary: index === favorites.length - 1 }"
      :to="'/' + f.name"
    >
      <component :is="f.icon" class="size-6" />
      <span>{{ f.label }}</span>
    </RouterLink>
  </div>
</template>
