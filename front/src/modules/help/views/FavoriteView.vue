<script setup lang="ts">
import type { MenuItem } from '@/authnz/interfaces/Menu'
import { useMenuStore } from '@/authnz/stores/MenuStore'
import { ArrowDownIcon, ArrowUpIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { getMenuItem } from '../utils/favorites'
import { useFavoriteStore } from '../stores/FavoriteStore'

const menuStore = useMenuStore()
const favoriteStore = useFavoriteStore()
const favorites = favoriteStore.favorites

const selectedFavorite = ref<MenuItem | undefined>(undefined)

const handleDrop = (event: DragEvent) => {
  console.log('handleDrop event: ', event)
  if (event.dataTransfer === null) {
    return
  }
  const name = event.dataTransfer.getData('text')
  const menuItem = getMenuItem(menuStore.menus, name)
  if (favorites.find((m) => m.name === menuItem.name)) {
    return
  }
  favorites.push(menuItem)
  console.log('favorites: ', favorites)
}
const handleDragOver = (event: Event) => {
  event.preventDefault()
}

const handleRemove = () => {
  const index = favorites.findIndex((f) => f.name === selectedFavorite.value?.name)
  favorites.splice(index, 1)
  selectedFavorite.value = undefined
}

const handleSelect = (menuItem: MenuItem) => {
  if (selectedFavorite.value && selectedFavorite.value.name === menuItem.name) {
    selectedFavorite.value = undefined
    return
  }
  selectedFavorite.value = menuItem
}

const handleMoveUp = () => {
  if (selectedFavorite.value === undefined) {
    return
  }
  const index = favorites.findIndex((m) => m === selectedFavorite.value)
  if (index === undefined || index === 0) {
    return
  }
  favorites.splice(index, 1)
  favorites.splice(index - 1, 0, selectedFavorite.value)
}

const handleMoveDown = () => {
  if (selectedFavorite.value === undefined) {
    return
  }
  const index = favorites.findIndex((m) => m === selectedFavorite.value)
  if (index === undefined || index === favorites.length - 1) {
    return
  }
  favorites.splice(index, 1)
  favorites.splice(index + 1, 0, selectedFavorite.value)
}
</script>

<template>
  <PageLayout class="h-full gap-9">
    <HeaderPage>
      <h1>Réglages des favoris</h1>
    </HeaderPage>

    <MainPage>
      <div class="flex flex-col gap-2">
        <nav class="flex h-12 gap-1">
          <button
            class="button"
            @click="handleRemove()"
            v-if="selectedFavorite"
            title="Supprimer le favori selectionné"
          >
            <TrashIcon class="size-6" />
          </button>
          <button
            class="button"
            @click="handleMoveUp()"
            v-if="selectedFavorite"
            title="Déplacer vers le haut"
          >
            <ArrowUpIcon class="size-6" />
          </button>
          <button
            class="button"
            @click="handleMoveDown()"
            v-if="selectedFavorite"
            title="Déplacer vers le bas"
          >
            <ArrowDownIcon class="size-6" />
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
            class="item cursor-pointer"
            :class="{ selected: selectedFavorite?.name === f.name }"
          >
            {{ f.label }}
          </div>
        </div>
      </div>
      <ul>
        <li>Glisser - Déposer un élément de menu pour l'ajouter au favoris</li>
        <li>Selectionner un favoris pour l'effacer</li>
      </ul>
    </MainPage>
  </PageLayout>
</template>
