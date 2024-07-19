<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import { database } from '../data/database'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleReset = async () => {
  if (!window.confirm('Etes vous sûr ?')) {
    return
  }
  await database.reset()
  window.alert('La base de donnée a été effacée et réinitialisée avec un compte admin')
  await router.replace('/')
  window.location.reload()
}

const handleExport = async () => {
  console.log('export database xxx')
}
</script>

<template>
  <PageLayout class="h-full gap-9">
    <HeaderPage>
      <h1>Base de données</h1>
    </HeaderPage>

    <MainPage>
      <nav class="flex gap-2">
        <button class="button danger" @click="handleReset()">
          <TrashIcon class="size-6" />
          <span>Réinitialiser la base de données</span>
        </button>
        <button class="button" @click="handleExport()">
          <TrashIcon class="size-6" />
          <span>Exporter la base de données</span>
        </button>
      </nav>
    </MainPage>
  </PageLayout>
</template>
