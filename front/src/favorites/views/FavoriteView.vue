<script setup lang="ts">
const handleDrop = (event: Event) => {
  console.log('handleDrop event: ', event)
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
      <div class="h-96 w-full bg-gray-100" @drop="handleDrop" @dragover="handleDragOver">truc</div>
    </MainPage>
  </PageLayout>
</template>
