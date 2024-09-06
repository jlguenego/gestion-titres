<script setup lang="ts">
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import type { Menu, MenuDirectory } from '../interfaces/Menu'

const route = useRoute()

const props = defineProps<{
  menu: Menu
}>()

const toggle = (menu: MenuDirectory) => {
  console.log('toggle', menu)
  menu.isExpanded = !menu.isExpanded
}

const isActive = (name: string) => {
  console.log('route.fullPath.substring(1): ', route.fullPath.substring(1))
  console.log('route.fullPath: ', route.fullPath)
  console.log('name: ', name)
  return route.fullPath.substring(1) === name
}
</script>

<template>
  <RouterLink
    v-if="props.menu.type === 'item'"
    :to="props.menu.name"
    class="flex p-2 hover:bg-gray-100"
    :class="{ 'font-bold': isActive(props.menu.name) }"
  >
    {{ props.menu.label }}
  </RouterLink>
  <div
    v-if="props.menu.type === 'directory'"
    class="flex cursor-pointer justify-between p-2 hover:bg-gray-100"
    @click="toggle(props.menu as MenuDirectory)"
  >
    <span class="">{{ props.menu.label }}</span>
    <ChevronRightIcon v-if="!props.menu.isExpanded" class="size-6" />
    <ChevronDownIcon v-else class="size-6" />
  </div>
  <nav
    v-if="props.menu.type === 'directory' && props.menu.isExpanded"
    class="flex flex-col border-gray-200 pb-4 pl-4"
  >
    <div v-for="item in props.menu.content" :key="item.label">
      <MenuWidget :menu="item" />
    </div>
  </nav>
</template>
