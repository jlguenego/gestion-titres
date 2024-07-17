<script lang="ts" setup>
import { type Item } from '@/interfaces/utilities'

const model = defineModel<Item[]>({ required: true })
console.log('model: ', model)

const props = defineProps<{
  items: Item[]
}>()

const isSelectedItem = (item: Item) => {
  return model.value.findIndex((it) => it.id === item.id) !== -1
}

const toggleItem = async (item: Item) => {
  const index = model.value.findIndex((it) => it.id === item.id)
  index !== -1 ? model.value.splice(index, 1) : model.value.push(item)
  model.value = [...model.value]
}
</script>

<template>
  <ul class="flex flex-wrap gap-2 rounded-lg border border-gray-400 p-2">
    <li
      v-for="item in props.items"
      :key="item.id"
      @click="toggleItem(item)"
      class="item-selectable"
      :class="{ selected: isSelectedItem(item) }"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
