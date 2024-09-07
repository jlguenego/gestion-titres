<script setup lang="ts">
import type { MenuItem } from '@/authnz/interfaces/Menu'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const favorites = ref<MenuItem[]>([])

const selectedFavorite = ref<MenuItem | undefined>(undefined)

const handleDrop = (event: DragEvent) => {
  console.log('handleDrop event: ', event)
  if (event.dataTransfer === null) {
    return
  }
  const name = event.dataTransfer.getData('text')
  favorites.value.push({ name: name, label: name, type: 'item' })
  console.log('favorites.value: ', favorites.value)
}
const handleDragOver = (event: Event) => {
  event.preventDefault()
}

const handleRemove = () => {
  favorites.value = favorites.value.filter((f) => f.name !== selectedFavorite.value?.name)
}

const handleSelect = (menuItem: MenuItem) => {
  if (selectedFavorite.value && selectedFavorite.value.name === menuItem.name) {
    selectedFavorite.value = undefined
    return
  }
  selectedFavorite.value = menuItem
}
</script>

<template>
  <PageLayout class="h-full gap-9">
    <HeaderPage>
      <h1>Réglages des favoris</h1>
    </HeaderPage>

    <MainPage>
      <p>Glisser - Déposer un élément de menus pour l'ajouter au favoris</p>
      <p>Selectionner un favoris pour l'effacer</p>
      <div class="flex flex-col gap-2">
        <nav>
          <button class="button" @click="handleRemove()">
            <TrashIcon class="size-6" />
          </button>
        </nav>
        <div
          class="flex h-96 w-full flex-col gap-2 rounded-xl bg-gray-100 p-4"
          @drop="handleDrop"
          @dragover="handleDragOver"
        >
          <div
            v-for="f in favorites"
            :key="f.name"
            @click="handleSelect(f)"
            :class="{ selected: selectedFavorite?.name === f.name }"
            class="bg-white p-2"
          >
            {{ f.name }}
          </div>
        </div>
      </div>
    </MainPage>
  </PageLayout>
</template>
