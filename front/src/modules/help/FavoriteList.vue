<script setup lang="ts">
import { useAuthenticationStore } from '@/authnz/stores/AuthenticationStore'
import { iconMap } from '@/utils/icons'
import { DocumentIcon } from '@heroicons/vue/24/outline'
import { getMenuItem } from './utils/favorites'

const authenticationStore = useAuthenticationStore()
const user = authenticationStore.needUser()

const favorites = user.favorites.map((name) => getMenuItem(name))
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
      <component :is="iconMap.get(f.name) ?? DocumentIcon" class="size-6" />
      <span>{{ f.label }}</span>
    </RouterLink>
  </div>
</template>
