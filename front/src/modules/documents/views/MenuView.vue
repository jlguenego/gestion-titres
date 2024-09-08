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
      <MenuTable />
    </MainPage>
  </PageLayout>
</template>
