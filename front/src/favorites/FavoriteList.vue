<script setup lang="ts">
import { useFavoriteStore } from './stores/FavoriteStore'

const favoriteStore = useFavoriteStore()

const favorites = favoriteStore.favorites
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
