<script lang="ts" setup>
import { VueComponent } from '@/markdown/AboutContent.md'
</script>

<template>
  <PageLayout>
    <HeaderPage>
      <h1>Mentions Légales</h1>
    </HeaderPage>
    <MainPage class="markdown">
      <VueComponent />
    </MainPage>
  </PageLayout>
</template>
