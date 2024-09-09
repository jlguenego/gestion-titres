<script lang="ts" setup>
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const model = defineModel<string>({ required: true })

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    autocomplete?: string
  }>(),
  {
    disabled: false,
    autocomplete: '',
  },
)

const isVisible = ref(false)

const toggle = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div class="relative">
    <input
      :type="isVisible ? 'text' : 'password'"
      v-model="model"
      :disabled="props.disabled"
      :autocomplete="props.autocomplete"
    />
    <div
      @click="toggle()"
      class="absolute right-0 top-0 flex w-12 cursor-pointer items-center justify-center rounded-r-lg p-2 hover:bg-gray-100"
    >
      <component :is="isVisible ? EyeSlashIcon : EyeIcon" class="size-6" />
    </div>
  </div>
</template>
