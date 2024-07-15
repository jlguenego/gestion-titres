<script lang="ts" setup>
import { VueComponent } from '../markdown/LegalContent.md'
</script>

<template>
  <main>
    <PageLayout>
      <HeaderPage :showMenu="false">
        <h1>Mentions Légales</h1>
      </HeaderPage>
      <VueComponent />
    </PageLayout>
  </main>
</template>
