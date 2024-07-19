<script setup lang="ts">
import { ArrowDownOnSquareIcon, ArrowUpOnSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { database } from '../data/database'
import { useRouter } from 'vue-router'
import { saveFile } from '@/utils/saveFile'

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
  const db = await database.export()
  saveFile('gestion-titre.json', JSON.stringify(db, undefined, 2))
}
</script>

<template>
  <PageLayout class="h-full gap-9">
    <HeaderPage>
      <h1>Base de données</h1>
    </HeaderPage>

    <MainPage class="gap-10">
      <nav class="flex gap-2">
        <button class="button" @click="handleExport()">
          <ArrowUpOnSquareIcon class="size-6" />
          <span>Exporter JSON</span>
        </button>
        <button class="button" @click="handleExport()">
          <ArrowDownOnSquareIcon class="size-6" />
          <span>Importer JSON</span>
        </button>
      </nav>
      <nav class="flex gap-2">
        <button class="button danger" @click="handleReset()">
          <TrashIcon class="size-6" />
          <span>Réinitialiser</span>
        </button>
      </nav>
    </MainPage>
  </PageLayout>
</template>
