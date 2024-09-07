<script setup lang="ts">
import type { MenuItem } from '@/authnz/interfaces/Menu'
import { ref } from 'vue'

const favorites = ref<MenuItem[]>([])

const handleDrop = (event: DragEvent) => {
  console.log('handleDrop event: ', event)
  if (event.dataTransfer === null) {
    return
  }
  const name = event.dataTransfer.getData('menu.name')
  favorites.value.push({ name: 'truc' + name, label: name, type: 'item' })
  console.log('favorites.value: ', favorites.value)
}
const handleDragOver = (event: Event) => {
  event.preventDefault()
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
      <div class="h-96 w-full bg-gray-100" @drop="handleDrop" @dragover="handleDragOver">
        <div v-for="f in favorites" :key="f.name">{{ f.name }}</div>
      </div>
    </MainPage>
  </PageLayout>
</template>
