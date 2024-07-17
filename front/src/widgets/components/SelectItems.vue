<script lang="ts" setup>
import { type Item } from '@/interfaces/utilities'

const model = defineModel<Item[]>({ required: true })
console.log('model: ', model)

const props = withDefaults(
  defineProps<{
    items: Item[]
    disabled?: boolean
  }>(),
  {
    disabled: false,
  },
)

const isSelectedItem = (item: Item) => {
  return model.value.findIndex((it) => it.id === item.id) !== -1
}

const toggleItem = async (item: Item) => {
  if (props.disabled) {
    return
  }
  const index = model.value.findIndex((it) => it.id === item.id)
  index !== -1 ? model.value.splice(index, 1) : model.value.push(item)
  model.value = [...model.value]
}
</script>

<template>
  <div
    class="flex flex-wrap gap-2 rounded-lg border border-gray-400 p-2"
    :class="{ 'border-transparent': props.disabled, 'bg-gray-100': props.disabled }"
  >
    <button
      type="button"
      v-for="item in props.items"
      :key="item.id"
      @click="toggleItem(item)"
      class="item-selectable"
      :class="{ selected: isSelectedItem(item) }"
      :disabled="props.disabled"
    >
      {{ item.name }}
    </button>
  </div>
</template>
