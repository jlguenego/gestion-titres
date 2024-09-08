<script setup lang="ts">
import PageLayout from '@/layout/page/PageLayout.vue'
import MenuTable from '../components/MenuTable.vue'
</script>

<template>
  <PageLayout class="self-stretch">
    <HeaderPage>
      <h1>Documentation - Introduction</h1>
    </HeaderPage>

    <MainPage>
      <p>
        TODO: faire une table des matières de tous les menus qui concernent l'utilisateur puis
        attacher un accordeon qui montre la doc.
      </p>

      <MenuTable />
    </MainPage>
  </PageLayout>
</template>
