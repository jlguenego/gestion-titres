<script lang="ts" setup>
import { VueComponent } from '../markdown/LegalContent.md'
</script>

<template>
  <PageLayout>
    <HeaderPage :menu="false">
      <h1>Mentions Légales</h1>
    </HeaderPage>
    <MainPage>
      <VueComponent />
    </MainPage>
  </PageLayout>
</template>
