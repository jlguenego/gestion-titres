<script setup lang="ts">
import { useAuthenticationStore } from '@/authnz/stores/AuthenticationStore'
import { ArrowDownIcon, ArrowUpIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { computed, ref } from 'vue'
import { getMenuItem } from '../utils/favorites'

const authenticationStore = useAuthenticationStore()
const user = authenticationStore.needUser()

const favorites = computed(() => {
  return user.favorites.map((name) => getMenuItem(name))
})
const selectedFavorite = ref<string | undefined>(undefined)

const patch = () => {
  authenticationStore.patch({ favorites: favorites.value.map((mi) => mi.name) })
}

const handleDrop = (event: DragEvent) => {
  console.log('handleDrop event: ', event)
  if (event.dataTransfer === null) {
    return
  }
  const name = event.dataTransfer.getData('text')
  if (user.favorites.includes(name)) {
    return
  }
  user.favorites.push(name)
  patch()
}
const handleDragOver = (event: Event) => {
  event.preventDefault()
}

const handleRemove = () => {
  if (selectedFavorite.value === undefined) {
    return
  }
  const index = user.favorites.indexOf(selectedFavorite.value)
  user.favorites.splice(index, 1)
  patch()
}

const handleSelect = (menuItemName: string) => {
  if (selectedFavorite.value && selectedFavorite.value === menuItemName) {
    selectedFavorite.value = undefined
    return
  }
  selectedFavorite.value = menuItemName
}

const handleMoveUp = () => {
  if (selectedFavorite.value === undefined) {
    return
  }
  const index = user.favorites.indexOf(selectedFavorite.value)
  if (index === -1 || index === 0) {
    return
  }
  user.favorites.splice(index, 1)
  user.favorites.splice(index - 1, 0, selectedFavorite.value)
  patch()
}

const handleMoveDown = () => {
  if (selectedFavorite.value === undefined) {
    return
  }
  const index = user.favorites.indexOf(selectedFavorite.value)
  if (index === -1 || index === user.favorites.length - 1) {
    return
  }
  user.favorites.splice(index, 1)
  user.favorites.splice(index + 1, 0, selectedFavorite.value)
  patch()
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
            @click="handleSelect(f.name)"
            class="item cursor-pointer"
            :class="{ selected: selectedFavorite === f.name }"
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
