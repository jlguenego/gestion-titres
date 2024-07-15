<script lang="ts" setup>
import { VueComponent } from '../markdown/LegalContent.md'
</script>

<template>
  <PageLayout>
    <HeaderPage :showMenu="false">
      <h1>Mentions Légales</h1>
    </HeaderPage>
    <MainPage>
      <VueComponent />
    </MainPage>
  </PageLayout>
</template>
